var mongoose = require('mongoose');


module.exports.init = function () {

  var projectSchema = new mongoose.Schema({
    id: String,
    source: String,
    link: String,
    title: String,
    category: String
  });

  var Project = mongoose.model('Project', projectSchema);

};
