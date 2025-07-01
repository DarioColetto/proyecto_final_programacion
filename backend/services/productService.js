const repository = require('../repositories/productRepository');

module.exports = {
  getAll: () => repository.findAll(),
  getById: (id) => repository.findById(id),
  create: (data) => repository.create(data),
  update: (id, data) => repository.update(id, data),
  delete: (id) => repository.remove(id),
};
