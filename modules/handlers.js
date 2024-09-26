'use strict';
const Book = require('../models/book');

const Handler={};

Handler.getBooks=async (request,response,next)=>{
    try{
        const books=await Book.find({});
        console.log(books);
        response.status(200).json(books);
    }catch(error){
        console.log(error);
        //response.status(400).send('no hemos encontrado libros ');
        next(error);
    }
};

Handler.createBook= async(request,response,next)=>{
    try{
        const book= await Book.create(resquest.body);
        response.status(200).send(book);
    }catch(error){
        error.customMessage='estamos teniendo problemas para crear el book:';
        console.error(error.customMessage+error);
        next(error);
    }
};
Handler.deleteBook= async (request,response,next)=>{
    try{
        console.log('Id Book a borrar:',request.params.id);
        await Book.findByIdAndDelete(request.params.id );
        response.sendStatus(204);
    }catch(error){
        error.customMessage='tenemos un problema cuando queremos borrar su libro:';
        console.error(error.customMessage+error);
        next(error);
    }
};
module.exports=Handler;