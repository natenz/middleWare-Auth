const mongoose = require('mongoose');


const mongoURI = 'mongodb://localhost:27017/middle';


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'Koneksi MongoDB gagal:'));


db.once('open', () => {
  console.log('Terhubung ke MongoDB');
});

module.exports = db;