const Product = require('../models/Product');

const findAll = () => Product.findAll();
const findById = (id) => Product.findByPk(id);
const create = (data) => Product.create(data);
const update = (id, data) => Product.update(data, { where: { id } });
const remove = (id) => Product.destroy({ where: { id } });

module.exports = { findAll, findById, create, update, remove };
