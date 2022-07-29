const { default: mongoose } = require("mongoose");
const  Mongoose  = require("mongoose");


const userSchema = Mongoose.Schema({
   id: {
     type: String,
     reuire: true
   },
   name: {
      type: String,
      reuire : true
   },
   age: {
      type: Number,
      reuire : true
   },
    createdOn: {
      type: Date,
      default: Date.now
   },

}) 

module.exports = mongoose.model("User", userSchema );