let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to the DB Schema which is the Model
let BusinessContact = require('../model/busContact');

//we want to display the business contact list
module.exports.displayBusinessContactList = (req, res, next) => {
    BusinessContact.find((err, contactList) => {
        if(err) {
            return console.error(err);
        } else {
            res.render('busContact/list',{title:'Business', ContactList:contactList, displayName:req.user?req.user.displayName:''});
        }
    }).sort('name');
};

module.exports.displayAddPage = (req, res, next) => {
    res.render('busContact/add',{title:'Add Contact', displayName:req.user?req.user.displayName:''});
};

module.exports.processAddPage = (req,res,next) => {
    let newContact = BusinessContact({
        "name":req.body.name,
        "number":req.body.number,
        "email":req.body.email,
    });
    BusinessContact.create(newContact,(err,BusinessContact) => {
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/businessContacts'); //change
        }
    });
};

module.exports.displayEditPage = (req,res,next) => {
    let id = req.params.id;
    BusinessContact.findById(id,(err,contactToEdit) => {
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            res.render('busContact/edit', {title:'Edit Contact',contact:contactToEdit, displayName:req.user?req.user.displayName:''});
        }
    });
};

module.exports.processEditPage = (req,res,next) => {
    let id = req.params.id;
    let updatedContact = BusinessContact({
        "_id":id,
        "name":req.body.name,
        "number":req.body.number,
        "email":req.body.email,
    });
    BusinessContact.updateOne({_id:id}, updatedContact, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/businessContacts');
        }
    });
};

module.exports.processDelete = (req,res,next) => {
    let id = req.params.id;
    BusinessContact.remove({_id:id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/businessContacts');
        }
    });
};