const express = require('express')
const next = require('next')
const mongoose = require('mongoose'),
bodyParser = require('body-parser'),
 passport = require('passport'),

cookieParser = require('cookie-parser'),
session = require('express-session')


require('./config/passport');

const secret = require('./config/secret');
const User = require('./models/user');
const Admin = require('./models/admin');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

//Connect to Db
mongoose.connect(secret.database,(err)=>{
    if(err){console.error(err)}
    else{console.log("Database connected")}
})

app.prepare()
.then(() => {
  const server = express()

   //MIDDLEWARE
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({extended: false}))
  server.use(cookieParser())
  server.use(session({
    secret: process.env.SESSION_SECRET || secret.key,
    resave: true,
    saveUninitialized: false
  }))
  server.use(passport.initialize())
  server.use(passport.session())


//   server.get('/',(req,res)=>{
//       if(req.user){
//           app.render(req,res,'/index',req.query);
//       }else{
//           res.redirect('/login');
//       }
//   })


  server.get('/',(req,res) => {
       res.redirect('/showpage');
  })
  server.get('/logout',(req,res) => {
       res.redirect('/login');
  })
  server.get('/getuser',(req,res)=>{
      res.json(req.user);
  })
  server.post('/login',passport.authenticate('local',{failureRedirect:'/login'}),(req,res) => {
      res.redirect('/');
  })
  
  server.post('/signup',(req,res) => {
      var user = new User();
    // var user = new Admin();
      user.username = req.body.username;
      user.password = req.body.password;
      user.email = req.body.email;

      user.save((err,user) => {
          if(err){console.error("Error: ", err)}
          else{res.redirect('/login')}
      })
  })



  server.get('/logout',(req,res)=>{
      if(req.user){
          req.logout();
          res.redirect('/login');
      }else{
          res.redirect('/login');
      }
  })


	server.get('/auth/facebook',passport.authenticate('facebook'));

	server.get('/auth/facebook/callback',
  	passport.authenticate('facebook', { failureRedirect: '/login' }),
  	function(req, res) {

        res.redirect('/');
  	});

	server.get('/auth/google', passport.authenticate('google', {scope: ['profile','email']}));

	server.get('/auth/google/callback', 
		passport.authenticate('google', { failureRedirect: '/login' }),
		function(req, res) {
			res.redirect('/');
	});
			


  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(secret.port, (err) => {
    if (err) throw err

    console.log('> Ready on http://localhost:3000')
  })
})