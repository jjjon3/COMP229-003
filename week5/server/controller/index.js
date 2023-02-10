let express = require('express');
let router = express.Router();
module.exports.displayHomePage = (req,res,next) => {
    res.render('index', {title:'Home'});
};

module.exports.displayAboutPage = (req,res,next) => {
    res.render('index', {title:'About Us'});
};

module.exports.displayContactPage = (req,res,next) => {
    res.render('index', {title:'Contact Us'});
};

module.exports.displayProductPage = (req,res,next) => {
    res.render('index', {title:'Products'});
};

module.exports.displayServicesPage = (req,res,next) => {
    res.render('index', {title:'Services'});
};