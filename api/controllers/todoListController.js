"use strict";

var mongoose = require("mongoose"),
  Task = mongoose.model("Tasks");

var mammoth = require('mammoth');

exports.get_html_content = function(req, res) {
  mammoth.convertToHtml({path: "./coolfreecv_resume_with_photo_n.docx"})
  .then(function(result){
      var html = result.value; // The generated HTML
      console.log(result.messages);
      res.send(html);
      var messages = result.messages; // Any messages, such as warnings during conversion
  })
  .done();
};

exports.list_all_tasks = function(req, res) {
    Task.find({}, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.create_a_task = function(req, res) {
    var new_task = new Task(req.body);
    new_task.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
  
  
  exports.read_a_task = function(req, res) {
    Task.findById(req.params.taskId, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
  
  
  exports.update_a_task = function(req, res) {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
  
  
  exports.delete_a_task = function(req, res) {
   Task.remove({
      _id: req.params.taskId
    }, function(err, task) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };
  