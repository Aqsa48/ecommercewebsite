const mongoose =require('mongoose')
mongoose.Promise = require('bluebird')
bcrypt=require('bcrypt-nodejs');    
const schema=mongoose.Schema;

const adminModel = new schema({
        username:{type:String,lowercase:true},
        email:String,
        password:String
})


adminModel.pre('save',function(next){
    const user=this;

    bcrypt.genSalt(10,function(err,salt){
        // this adds salting of 10 extra characters in password
        if(err){
            return next(err);
        }
        bcrypt.hash(user.password,salt,null,function(err,hash){
            if(err){
                return next(err);
            }
            user.password=hash;
            next();
        })
    })
})


adminModel.methods.comparePassword=function(password){
    return bcrypt.compareSync(password,this.password);
}


module.exports=mongoose.model('adminModel',adminModel); 