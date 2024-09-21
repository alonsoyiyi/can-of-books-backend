'use strict';
const Book = require('../models/book');

async function getBooks(request,response,next){
    try{
        const books=await Book.find({});
        console.log(books);
        response.status(200).json(books);
    }catch(error){
        console.log(error);
        //response.status(400).send('no hemos encontrado libros ');
        next(error);
    }
}
module.exports=getBooks;