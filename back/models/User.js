const  {Schema, model} = require("mongoose");

const UserMail = new Schema({
   name: {type: String, required: true},
   message:{type: Array},
},{timestamps:true})



module.exports = model('UserMail', UserMail);