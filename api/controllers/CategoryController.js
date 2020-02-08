"use strict";

var mongoose = require("mongoose"),
  CategoryDoc = mongoose.model("Categories");

exports.create_a_category = function(req, res) {
  var new_cat = new CategoryDoc(req.body);
  new_cat.save(function(err, category) {
    if (err) res.send(err);
    res.json(category);
  });
};

exports.list_all_categories = function(req, res) {
  CategoryDoc.find({}, function(err, cats) {
    if (err) res.send(err);
    res.json(cats);
  });
};

exports.delete_a_category = function(req, res) {
  CategoryDoc.remove({
     _id: req.params.Id
   }, function(err, cat) {
     if (err)
       res.send(err);
     res.json({ message: 'Category successfully deleted' });
   });
 };
