import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'; 
import routes from '../Middleware/routes/routes.js';


const app = express();

mongoose.connect('mongodb://localhost:27017/middle', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Koneksi MongoDB gagal:'));
db.once('open', () => {
  console.log('Terhubung ke MongoDB');
});

app.use('/', routes);
//const routes = require('../Middleware/routes/routes.js');



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});