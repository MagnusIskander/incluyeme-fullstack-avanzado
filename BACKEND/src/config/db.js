const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const connectDB = () => {
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));
};


module.exports = connectDB;
