let mongoose = require('mongoose');
let booksModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
    collection: "book"
});

module.exports = mongoose.model('book',booksModel);