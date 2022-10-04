const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const completedProjectSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Desc: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  MobileNo: {
    type: String,
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
  Adhaar: {
    type: String,
    required: true,
  },
  ProjectHolder: {
    type: String,
    required: true,
  },
  Link:{
    type:String,
    required: true,
  },
  Bid: {
    type: String,
    required: true,
  }
});
 
const completed_projects= mongoose.model('completed_projects', completedProjectSchema);
module.exports = completed_projects;
