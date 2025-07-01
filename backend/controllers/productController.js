const service = require('../services/productService');

exports.getAll = async (req, res) => {
  res.json(await service.getAll());
};

exports.getById = async (req, res) => {
  res.json(await service.getById(req.params.id));
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
