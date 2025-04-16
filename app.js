const express = require('express');
const cors = require('cors');
const bloonRoutes = require('./routes/routesElementos'); 
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
const mongoURI = 'mongodb://localhost:27017/ninja_kiwi'; 

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conexión exitosa a MongoDB'))
.catch(err => console.error('Error de conexión a MongoDB:', err));

// Ruta base para la API
app.use('/api/bloonstd', bloonRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));



