let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

//modules for authentication
let session = require('express-session');
let passport = require('passport');
let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');

//database setup
let mongoose = require('mongoose');
let DB = require('./db');
//point mongoose to the db URI
mongoose.connect(DB.URI,{useNewUrlParser:true, useUnifiedtopology:true});
//create an event to let mongo connect to the database
let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error'));
mongoDB.once('open',() => {
  console.log('Connected to MongoDB...');
});

let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let busContactRouter = require('../routes/busContact');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

//setup express session
app.use(session({
  secret:"SomeSecret",
  saveUninitialized:false,
  reSave:false
}));
//initialize flash to maintain the error message
app.use(flash());
//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//passport user configuration
//create a user model instance for each user
let userModel = require('../model/user');
let User = userModel.User;
passport.use(User.createStrategy());
//serialize and deserialize the user info
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/businessContacts', busContactRouter);

//POST method for contact form submission
//app.use(express.urlencoded({ extended: true}));
app.post('/contact', (req, res) => {
  const { name, email, phone, message } = req.body;

  //log the form content
  console.log(`Name: ${name}`);
  console.log(`Email Address: ${email}`);
  console.log(`Phone Number: ${phone}`);
  console.log(`Message: ${message}`);
  //redirect user back to home page
  res.redirect('/');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{title:'Error'});
});

module.exports = app;
