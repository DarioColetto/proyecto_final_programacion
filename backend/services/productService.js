const repository = require('../repositories/productRepository');

/**
 * Service for managing products.
 * Provides methods to perform CRUD operations on products.
 * @class ProductService
 * @module services
 * @requires repositories/productRepository
 */

class ProductService {

  static getAll() {
    return repository.findAll();
  }

  static getById(id) {
    return repository.findById(id);
  }


  static create(data) {
    return repository.create(data);
  }

  static update(id, data) {
    return repository.update(id, data);
  }

  static delete(id) {
    return repository.remove(id);
  }
}


module.exports = ProductService;
