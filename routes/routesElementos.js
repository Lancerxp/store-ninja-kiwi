const express = require('express');
const router = express.Router();
const Bloon = require('../models/products');


// Crear
router.post('/', async (req, res) => {
    try {

        const { 
            _id,
            codigo,
            descripcion_del_codigo,
            precio,
            talla,
            color,
            cantidad,
            tipo_de_producto,
            imagen,
            fechaIngreso
        } = req.body;

        const nuevoBloon = new Bloon({
            _id,
            codigo,
            descripcion_del_codigo,
            precio,
            talla,
            color,
            cantidad,
            tipo_de_producto,
            imagen,
            fechaIngreso
        });
        const resultado = await nuevoBloon.save();
        res.status(201).json(resultado);
    } catch (err) {
        res.status(500).json({ mensaje: err.message });
    }
});

// Leer todos
router.get('/', async (req, res) => {
    try {
        const bloons = await Bloon.find();
        res.json(bloons);
    } catch (err) {
        res.status(500).json({ mensaje: err.message });
    }
});

// Leer uno por ID
router.get('/:id', async (req, res) => {
    try {
        const bloon = await Bloon.findById(req.params.id);
        if (!bloon) return res.status(404).json({ mensaje: 'No encontrado' });
        res.json(bloon);
    } catch (err) {
        res.status(500).json({ mensaje: err.message });
    }
});

// Actualizar
router.put('/:id', async (req, res) => {
    try {
        const actualizado = await Bloon.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(actualizado);
    } catch (err) {
        res.status(500).json({ mensaje: err.message });
    }
});

// Eliminar
router.delete('/:id', async (req, res) => {
    try {
        await Bloon.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Elemento eliminado' });
    } catch (err) {
        res.status(500).json({ mensaje: err.message });
    }
});

module.exports = router;
