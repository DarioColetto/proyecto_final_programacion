const service = require('../services/productService');

exports.getAll = async (req, res) => {
  res.json(await service.getAll());
};

exports.getById = async (req, res) => {
  res.json(await service.getById(req.params.id));
};

exports.getByName = async (req, res) => { // <-- Añadir esta función
  res.json(await service.getByName(req.params.name)); // Suponiendo un método getByName en el servicio
};

exports.getByBrand = async (req, res) => { // <-- Añadir esta función
    res.json(await service.getByBrand(req.params.brand)); // Suponiendo un método getByBrand en el servicio
};

exports.getByCategory = async (req, res) => { // <-- Añadir esta función
    res.json(await service.getByCategory(req.params.category)); // Suponiendo un método getByCategory en el servicio
};

exports.getByPriceRange = async (req, res) => { // <-- Añadir esta función
    // Ejemplo de cómo manejar los parámetros de rango de precios (query params)
    const { minPrice, maxPrice } = req.query;
    res.json(await service.getByPriceRange(minPrice, maxPrice)); // Suponiendo un método getByPriceRange en el servicio
};

exports.create = async (req, res) => {
  res.status(201).json(await service.create(req.body));
};

exports.update = async (req, res) => {
  await service.update(req.params.id, req.body);
  res.sendStatus(204);
};

exports.delete = async (req, res) => {
  await service.delete(req.params.id);
  res.sendStatus(204);
};