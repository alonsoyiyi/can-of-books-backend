'use strict';

require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose');
const getBooks=require('./modules/handlers')

require('./dataBase');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

// agregando mongoose
mongoose.connect(process.env.MONGO_URL);
//================================================
//conectando la base de datos
//=================================================
const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open', ()=>{
  console.log('we connected');
});
// routers
app.get('/books',getBooks);

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
