var mongoose = require('mongoose');


module.exports.init = function () {

  var testSchema = new mongoose.Schema({
    name: String
  });

  var Test = mongoose.model('Test', testSchema);

};
