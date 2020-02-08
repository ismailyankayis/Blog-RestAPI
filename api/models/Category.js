"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    CategoryName: String,
    Keywords: {
      type: [{ type: String }]
    },
    IsDeleted: {
      type: Boolean,
      default: false
    },
    Created_Date: {
      type: Date,
      default: Date.now
    },
    Created_By: String,
    LastModified_Date: {
      type: Date,
      default: Date.now
    },
    LastModified_By: String
  });
  
  module.exports = mongoose.model("Categories", CategorySchema);