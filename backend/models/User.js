const mongoose=require('mongoose');
const {Schema}=mongoose;

const UserSchema = new Schema({
 name:{
type:String,
requires:true,


 },
 email:{
    type:String,
requires:true,



 },
 password:{
    type:String,
    requires:true,
    unique:true

 },
 date:{
    type:Date,
  default:Date.now,
  

 },

 
  
});
const User=mongoose.model('user',UserSchema);
User.createIndexes();
module.exports=User;