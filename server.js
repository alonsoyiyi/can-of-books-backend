'use strict';

require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const getBooks = require('./modules/handlers');
const Handler = require('./modules/handlers');

require('./dataBase');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// agregando mongoose
mongoose.connect(process.env.MONGO_URL);
//================================================
//conectando la base de datos
//=================================================
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('we connected');
});

// routers
app.get('/books', Handler.getBooks);
app.post('/books', Handler.createBook);
app.delete('/books/:id', Handler.deleteBook);
app.get('*', (request, response) => {
  response.status(404).send('Sorry,Esta pagina no existe');
})

// app.get('/test', (request, response) => {
//   response.send('test request received')
// });
app.use((error,request,response,next)=>{
  response.status(500).send(`Muy mal, ocurrio un error en el servidor ... ${error.customMessage} ${error.message} `);
});
app.listen(PORT, () => console.log(`listening on ${PORT}`));
