let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//connect to our book model
let Book = require('../model/books');

let bookController = require('../controller/book');

//GET ROUTE for the book list page - READ OPERATION
router.get('/', bookController.displayBookList);

//GET route for displaying the Add Page - CREATE operation
router.get('/add', bookController.displayAddPage);

//POST route for processing the Add Page - CREATE operation
router.post('/add', bookController.processAddPage);

//GET route for displaying the Edit Page - UPDATE operation
router.get('/edit/:id', bookController.displayEditPage);

//POST route for processing the Edit Page - UPDATE operation
router.post('/edit/:id', bookController.processEditPage);

//GET to perform deletion - DELETE operation
router.get('/delete/:id', bookController.processDelete);

module.exports = router;