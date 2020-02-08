"use strict";

var mongoose = require("mongoose"),
  ArticleDoc = mongoose.model("Articles");

exports.list_all_articles = function(req, res) {
  ArticleDoc.find({}, function(err, article) {
    if (err) res.send(err);
    res.json(article);
  });
};

exports.create_a_article = function(req, res) {
  var new_article = new ArticleDoc(req.body);
  new_article.save(function(err, article) {
    if (err)
      res.send(err);
    res.json(article);
  });
};

exports.read_a_article = function(req, res) {
  ArticleDoc.findById(req.params.Id, function(err, article) {
    if (err)
      res.send(err);
    res.json(article);
  });
};

exports.delete_a_article = function(req, res) {
  ArticleDoc.remove({
     _id: req.params.Id
   }, function(err, article) {
     if (err)
       res.send(err);
     res.json({ message: 'Article successfully deleted' });
   });
 };
