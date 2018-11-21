    const passport=require('passport')
    localStrategy=require('passport-local').Strategy
    facebookStrategy=require('passport-facebook').Strategy
    googleStrategy=require('passport-google-oauth').OAuth2Strategy
    bcrypt=require('bcrypt-nodejs')
    userModel=require('../models/user');
    adminModel=require('../models/admin');


// Passport Strategy for local
passport.use('User',new localStrategy(function(username,password,done){
    // console.log('Entered');
   userModel.findOne({'local.username':username},function(err,user){
       console.log('Entered');
        if(err){
           return done(err);
        }
        if(!user){
            return done(null,false);
            console.log('User not found');
        }
        if(!user.comparePassword(password)){
            return done(null,false);
            console.log('User passsword not macth');
        }
console.log('User passsword not macth');
        return done(null,user);
   }) 
}))



passport.use('admin',new localStrategy(function(username,password,done){
   adminModel.findOne({username:username},function(err,user){
        if(err){
           return done(err);
        }
        if(!user){
            return done(null,false);
        }
        if(!user.comparePassword(password)){
            return done(null,false);
        }

        return done(null,user);
   }) 
}))



// Passport strategy for facebook
passport.use(new facebookStrategy({
    clientID: '345247605910411',
    clientSecret: '7949e2023759e2b7e2fabb1f06526c1d',
    callbackURL: 'http://localhost:4000/auth/facebook/callback',

    profileFields: ['id', 'displayName']
  },
  function(accessToken, refreshToken, profile, cb) {
    process.nextTick(function(){
        userModel.findOne({'facebook.id':profile.id},function(err,user){
            
            if(err){
                return cb(err);
            }
            if(user){
                return cb(null,user);
                console.log(user);
            }
            else{
                var newUser=new userModel();
                newUser.facebook.id=profile.id;
                newUser.facebook.token=accessToken;
                newUser.facebook.name=profile.name.givenName+' '+profile.name.familyName;
                newUser.save(function(err){
                    if(err){
                        throw err;
                    }
                    
                    return cb(null,newUser);
                });
            }
           
        })
    });
  }
));

// Passport strategy for google
passport.use(new googleStrategy({
    clientID: '372695183347-ro0qc3l92qec38kb7dq6a025ukobdpvh.apps.googleusercontent.com',
    clientSecret: 'Psx3_iqiMNosIN_xMX5rEGpi',
    
    callbackURL: 'http://localhost:4000/auth/google/callback',
    profileFields: ['id', 'displayName', 'email']
  },
  function(accessToken, refreshToken, profile, cb) {
    process.nextTick(function(){
        userModel.findOne({'google.id':profile.id},function(err,user){
            
            if(err){
                return cb(err);
            }
            if(user){
                return cb(null,user);
                console.log(user);
            }
            else{
                var newUser=new userModel();
                newUser.google.id=profile.id;
                newUser.google.token=accessToken;
                newUser.google.name=profile.displayName;
                newUser.google.email=profile.emails[0].value;

                newUser.save(function(err){
                    if(err){
                        // throw err;
                        newUser.save();
                    }
                    
                    return cb(null,newUser);
                });
            }
           
        })
    });
  }
));



// Passport Serialization
passport.serializeUser(function(user,done){
    done(null,user._id);
})

// Passport Deserialization
passport.deserializeUser(function(id,done){
    userModel.findById(id,function(err,user){
        if(err){
            return done(err);
        }
        if(user){
        done(null,user);
        }
        else{
            adminModel.findById(id,function(err,user){
                if(err){
                    return done(err);
                }
                if(user){
                done(null,user);
                }
            }
        )}
    
})
})


// module.exports=passport;