let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

//connect to our business contact model
let BusinessContact = require('../model/busContact');

let busContactController = require('../controller/busContact');

//helper function for guard puposes
function requireAuth(req,res,next) {
    //check if user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

//GET ROUTE for the business contact list page - READ OPERATION
router.get('/', busContactController.displayBusinessContactList);

//GET route for displaying the Add Page - CREATE operation
router.get('/add', requireAuth, busContactController.displayAddPage);

//POST route for processing the Add Page - CREATE operation
router.post('/add', requireAuth, busContactController.processAddPage);

//GET route for displaying the Edit Page - UPDATE operation
router.get('/edit/:id', requireAuth, busContactController.displayEditPage);

//POST route for processing the Edit Page - UPDATE operation
router.post('/edit/:id', requireAuth, busContactController.processEditPage);

//GET to perform deletion - DELETE operation
router.get('/delete/:id', requireAuth, busContactController.processDelete);

module.exports = router;