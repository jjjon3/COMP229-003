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

module.exports = router;