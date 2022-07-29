const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: String,
    reuire: true,
  },

  NurseName: {
    type: String,
    reuire: true,
  },

  HospitalName: {
    type: String,
    reuire: true,
  },

  Location: {
    type: String,
    reuire: true,
  },

  NurseNid: {
    type: String,
    reuire: true,
  },

  Gender: {
    type: String,
    reuire: true,
  }, 

  Address: {
    type: String,
    reuire: true,
  },

  ContactNumber: {
    type: String,
    
  },

   DateofBirth: {
    type: String,
   
  },

  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);