let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//connect to our book model
let Book = require('../model/books');
//GET ROUTE for the book list page - READ OPERATION
router.get('/',(req, res, next) => {
    Book.find((err, bookList) => {
        if(err) {
            return console.error(err);
        } else {
            //console.log(BookList);
            res.render('book',{title:'Book List', BookList:bookList});
        }
    });
});
module.exports = router;