let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jw = require('jsonwebtoken');

let passport = require('passport');

//connect to our book model
let Book = require('../model/books');

let bookController = require('../controller/book');

//helper function for guard puposes
function requireAuth(req,res,next) {
    //check if user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

//GET ROUTE for the book list page - READ OPERATION
router.get('/', bookController.displayBookList);

//GET route for displaying the Add Page - CREATE operation
router.get('/add', requireAuth, bookController.displayAddPage);

//POST route for processing the Add Page - CREATE operation
router.post('/add', requireAuth, bookController.processAddPage);

//GET route for displaying the Edit Page - UPDATE operation
router.get('/edit/:id', requireAuth, bookController.displayEditPage);

//POST route for processing the Edit Page - UPDATE operation
router.post('/edit/:id', requireAuth, bookController.processEditPage);

//GET to perform deletion - DELETE operation
router.get('/delete/:id', requireAuth, bookController.processDelete);

module.exports = router;