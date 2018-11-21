const express = require("express");
const next = require("next");
const mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  cookieParser = require("cookie-parser"),
  session = require("express-session");
const path = require("path");
const url = require("url");
const cloudinary = require("cloudinary"); //Using this module for storing image to cloud
const multer = require("multer");

require("./config/passport");

const secret = require("./config/secret");

//Cloudinary Configuration
cloudinary.config({
  cloud_name: "dwl34s9au",
  api_key: "849874246146269",
  api_secret: "VU345KhOqF8cRZzE_qEdfqFyL7g"
});

const multerDest = multer({ dest: "./static/uploads/img/" });

const User = require("./models/user");
const Admin = require("./models/admin");
const Products = require("./models/products");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();

//#require('./config/passport')(passport);

//Connect to Db
mongoose.connect(secret.database, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("Database connected");
  }
});

app.prepare().then(() => {
  const server = express();

  if (!dev) {
    // Enforce SSL & HSTS in production
    server.use(function(req, res, next) {
      var proto = req.headers["x-forwarded-proto"];
      if (proto === "https") {
        res.set({
          "Strict-Transport-Security": "max-age=31557600" // one-year
        });
        return next();
      }
      res.redirect("https://" + req.headers.host + req.url);
    });
  }

  // Static files
  // https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
  server.use(
    "/static",
    express.static(path.join(__dirname, "static"), {
      maxAge: dev ? "0" : "365d"
    })
  );

  //MIDDLEWARE
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(cookieParser());
  server.use(
    session({
      secret: process.env.SESSION_SECRET || secret.key,
      resave: true,
      saveUninitialized: false
    })
  );
  server.use(passport.initialize());
  server.use(passport.session());

  server.get("/getProducts", (req, res) => {
    Products.find({}, (err, user) => {
      if (err) {
        console.error("Error: ", err);
      } else {
        res.json(user);
      }
    });
  });

  //men fashion category
  server.get("/getMenfashion", (req, res) => {
    Products.find({ productcategory: "men" }, (err, user) => {
      if (err) {
        console.error("Error: ", err);
      } else {
        res.json(user);
      }
    });
  });

  //women fashion category
  server.get("/getWomenfashion", (req, res) => {
    Products.find({ productcategory: "women" }, (err, user) => {
      if (err) {
        console.error("Error: ", err);
      } else {
        res.json(user);
      }
    });
  });

  //women fashion category
  server.get("/getPhones", (req, res) => {
    Products.find({ productcategory: "phone" }, (err, user) => {
      if (err) {
        console.error("Error: ", err);
      } else {
        res.json(user);
      }
    });
  });

  //Health category
  server.get("/getHealth", (req, res) => {
    Products.find({ productcategory: "health" }, (err, user) => {
      if (err) {
        console.error("Error: ", err);
      } else {
        res.json(user);
      }
    });
  });

  //appliance category category
  server.get("/getAppliance", (req, res) => {
    Products.find({ productcategory: "appliance" }, (err, user) => {
      if (err) {
        console.error("Error: ", err);
      } else {
        res.json(user);
      }
    });
  });

  //   server.get('/',(req,res)=>{
  //       if(req.user){
  //           app.render(req,res,'/index',req.query);
  //       }else{
  //           res.redirect('/login');
  //       }
  //   })

  // server.get('/products',(req,res)=>{
  //     productModel.find({},function{
  //         res.json(data);
  //     })
  // })

  server.get("/", (req, res) => {
    res.redirect("/showpage");
  });

  server.get("/getuser", (req, res) => {
    res.json(req.user);
  });

  //admin login route
  server.post(
    "/adminlogin",
    passport.authenticate("admin", { failureRedirect: "/adminlogin" }),
    (req, res) => {
      res.redirect("/admindashboard");
    }
  );

  server.post("/signup", (req, res) => {
    var user = new User();
    //var user = new Admin();
    user.local.username = req.body.username;
    user.local.password = req.body.password;
    user.local.email = req.body.email;

    user.save((err, user) => {
      if (err) {
        console.error("Error: ", err);
      } else {
        res.redirect("/login");
      }
    });
  });

  server.post(
    "/addmyProduct",
    multerDest.single("productimage"),
    (req, res) => {
      cloudinary.uploader.upload(req.file.path, function(result) {
        var user = new Products();
        user.productcategory = req.body.productcategory;
        user.brandname = req.body.brandname;
        user.producttitle = req.body.producttitle;
        user.productprice = req.body.productprice;
        user.productimage = result.url;

        user.save((err, user) => {
          if (err) {
            console.error("Error: ", err);
          } else {
            res.redirect("/admindashboard");
          }
        });
      });
    }
  );

  //user login route
  server.post(
    "/userLogin",
    passport.authenticate("User", { failureRedirect: "/login" }),
    (req, res) => {
      console.log("Success");
      res.redirect("/userdashboard");
    }
  );

  server.get("/logout", (req, res) => {
    if (req.user) {
      req.logout();
      res.redirect("/login");
    } else {
      res.redirect("/login");
    }
  });

  server.get("/auth/facebook", passport.authenticate("facebook"));

  server.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", { failureRedirect: "/login" }),
    function(req, res) {
      res.redirect("/");
    }
  );

  server.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  server.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    function(req, res) {
      res.redirect("/");
    }
  );

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(secret.port, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
