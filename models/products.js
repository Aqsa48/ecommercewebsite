const mongoose =require('mongoose')
mongoose.Promise = require('bluebird')
bcrypt=require('bcrypt-nodejs');    
const schema=mongoose.Schema;

const addProducts = new schema({
        productcategory:String,
        brandname: String,
        producttitle:String,
        productimage: String,
        productprice: String        
})

module.exports=mongoose.model('addProducts',addProducts); 