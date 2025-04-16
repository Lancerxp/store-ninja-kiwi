const mongoose = require('mongoose');

const bloonstdSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    codigo: { type: String, required: true },
    descripcion_del_codigo: { type: String, required: true },
    precio: { type: Number, required: true },
    talla: { type: String, required: false },
    color: { type: String, required: true },
    cantidad: { type: Number, required: true },
    tipo_de_producto: { type: String, required: true },
    imagen: { type: String, required: false },
    fechaIngreso: { type: Date, default: Date.now }
});

module.exports = mongoose.model('bloonstd', bloonstdSchema, 'bloonstd');
