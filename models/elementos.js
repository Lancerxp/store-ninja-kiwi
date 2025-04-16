router.get('/productos', async (req, res) => {
  try {
    const productos = await bloonstd.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ mensaje: err.message });
  }
});