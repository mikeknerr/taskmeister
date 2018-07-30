var mongoose = require('mongoose');
mongoose.set('debug', true);

var uriString = process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL;

var port = process.env.PORT || 3000;

mongoose.connect(uriString, function(err, res) {
  if (err) {
      console.log ('ERROR connecting to: ' + uriString + '. ' + err);
      } else {
      console.log ('Succeeded connected to: ' + uriString);
      }
});
//mongoose.connect('mongodb://localhost/todo-api')




mongoose.Promise = Promise;

module.exports.Todo = require("./todo")
