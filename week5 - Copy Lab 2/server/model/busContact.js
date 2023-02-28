let mongoose = require('mongoose');
let busContactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('buscontact',busContactModel);