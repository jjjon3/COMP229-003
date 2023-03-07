var express = require('express');
var router = express.Router();
let indexController = require('../controller/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

/* GET product page. */
router.get('/products', indexController.displayProductPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

// GET Route to display login page
router.get('/login', indexController.displayLoginPage); 

// POST Router for processing the login page
router.post('/login', indexController.processLoginPage);

// GET Router for displaying the register page
router.get('/register', indexController.displayRegisterPage);

// POST Router for processing the register page
router.post('/register', indexController.processRegisterPage);

// GET to perform user logout
router.get('/logout', indexController.performLogout);

module.exports = router;