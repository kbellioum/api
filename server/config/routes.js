var auth = require('./auth'),
    controllers = require('../controllers');


var User = require('mongoose').model('User');
var Project = require('mongoose').model('Project');
var Test = require('mongoose').model('Test');

module.exports = function(app) {
    app.get('/register', controllers.users.getRegister);
    app.post('/register', controllers.users.createUser);

    app.post('/login', auth.login);
    app.get('/logout', auth.logout);
    app.get('/login', controllers.users.getLogin);

    app.get('/main', auth.isAuthenticated, function (req, res) {
      Project.find({})
        .then((user) => {
          res.render('main', {currentUser: req.user, projects: user});
        })
        .catch((err) => {
          console.log(err)
        })
    });

    app.get('/', function (req, res) {
        res.render('index', {currentUser: req.user});
    });

    app.get('*', function (req, res) {
        res.render('index', {currentUser: req.user});
    });
};
