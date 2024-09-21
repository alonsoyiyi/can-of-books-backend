require('dotenv').config();
const mongoose=require('mongoose');
mongoose.connect(process.env.MONGO_URL);

const Book=require('./models/book.js');

async function dataBooks(){
    console.log('cargando libros');
    await Book.create({title:'maleus-maleficarum',description:'El libro de las brujas',status:'RECOMENDADO'});
    await Book.create({title:'200 millas submarinas',description:'Aventuras en el Nautulus, creer que hay algo mal',status:'CAMBIANDO-VIDAS'});
    await Book.create({title:'Grimms complete fairy tales',description:'historias escritas por los hermanos en ingles',status:'RECOMENDADO'})
    await Book.create({title:'Habitos atomicos',description:'Como mejorar los habitos propios',status:'CAMBIANDO-VIDAS'});
    console.log('carga finalizada');
    // mongoose.disconnect();
}

dataBooks();