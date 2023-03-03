let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//enable JWT
let jwt = require('jsonwebtoken');
let DB = require('../config/db');

//create user model instance
let userModel = require('../model/user');
let User = userModel.User;



module.exports.displayHomePage = (req,res,next) => {
    res.render('index', {title:'Home', displayName:req.user?req.user.displayName:''});
};

module.exports.displayAboutPage = (req,res,next) => {
    res.render('index', {title:'About Us', displayName:req.user?req.user.displayName:''});
};

module.exports.displayContactPage = (req,res,next) => {
    res.render('index', {title:'Contact Us', displayName:req.user?req.user.displayName:''});
};

module.exports.displayProductPage = (req,res,next) => {
    res.render('index', {title:'Products', displayName:req.user?req.user.displayName:''});
};

module.exports.displayServicesPage = (req,res,next) => {
    res.render('index', {title:'Services', displayName:req.user?req.user.displayName:''});
};

module.exports.displayLoginPage = (req,res,next) => {
    //check if the user is already logged in
    if (!req.user) {
        res.render('auth/login', {
            title:"Login",
            messages:req.flash('loginMessage'),
            displayName:req.user?req.user.displayName:''
        }); 
    } else {
        return res.redirect('/');
    }
};

module.exports.processLoginPage = (req,res,next) => {
    passport.authenticate('local', (err,user,info) => {
        //server err?
        if(err) {
            return next(err);
        }

        //is there a user login error
        if(!user) {
            req.flash('login message', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            if(err) {
                return next (err);
            }
            const payload = {
                id: user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email
            }
            const authToken = jwt.sign(payload, DB.Secret, {
                expiresIn:604800 // 1 week
            });
            // Getting Ready to convert to API
            /*
            res.json({success:true, msg:'User Logged In Successfully', user: {
                id: user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email
                },token:authToken
            });
            */
            return res.redirect('/bookList');
        });
    }) (req, res, next);
};

module.exports.displayRegisterPage = (req,res,next) => {
    //check if user is not already logged in
    if(!req.user) {
        res.render('auth/register', {
            title:'Register',
            messages:req.flash('registerMessage'),
            displayName:req.user?req.user.displayName:''
        });
    } else {
        return res.redirect('/');
    }
};

module.exports.processRegisterPage = (req,res,next) => {
    //instantiate a user object
    let newUser = new User({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
        displayName:req.body.displayName
    });

    User.register(newUser, req.body.password, (err) => {
        if (err) {
            console.log("Error: inserting New User");
            if(err.name == "UserExistsError") {
                req.flash('registerMessage',
                'Registration Error: User Already Exists!');
                console.log('Error: User already exists!');
            }
            return res.render('auth/register',{
                title:'Register',
                messages:req.flash('registerMessage'),
                displayName:req.user?req.user.displayName:''
            });
        } else {
            //if no error exists then registration is successful
            //redirect the user and authenticate them
            //Getting Ready to convert to API
            //res.json({success:true, msg:'User Registered Successfully'});

            return passport.authenticate('local')(req,res,() => {
                res.redirect('/bookList');
            });
            
        }
    });
};

module.exports.performLogout = (req,res,next) => {
    req.logout(function(err) {
        if(err) {
            return next(err);
        }
        res.redirect('/');
    });
};