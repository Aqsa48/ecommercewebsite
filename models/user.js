const mongoose =require('mongoose')
mongoose.Promise = require('bluebird')
bcrypt=require('bcrypt-nodejs');   
const schema=mongoose.Schema;

const userModel = new schema({
    local:{
        username:String,
        email:String,
        password:String
    },
    facebook:{
        id:String,
        token:String,
        name:String
    },
    google: {
		id: String,
		token: String,
		email: String,
		name: String
	}
})

userModel.pre('save',function(next){
    const user=this;

    bcrypt.genSalt(10,function(err,salt){
        // this adds salting of 10 extra characters in password
        if(err){
            return next(err);
        }
        bcrypt.hash(user.local.password,salt,null,function(err,hash){
            if(err){
                return next(err);
            }
            user.local.password=hash;
            next();
        })
    })
})

userModel.methods.comparePassword=function(password){
    return bcrypt.compareSync(password,this.local.password);
}


module.exports=mongoose.model('userModel',userModel); 