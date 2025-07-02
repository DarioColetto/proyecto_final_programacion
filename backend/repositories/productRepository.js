const Product = require('../models/Product');


/**
 * Repository for managing products in the database.
 * Provides methods to perform CRUD operations and queries on products.
 * @class ProductRepository
 * 
 * @module repositories
 * @requires models/Product
 * @description
 * This repository provides methods to interact with the Product model,
 */
class ProductRepository {
  static findAll() {
    return Product.findAll();
  }

    static findById(id) {
    return Product.findByPk(id);
  }

  //Find by name
    static findByName(name) {
        return Product.findAll({ where: { name } });
    }
    //Find by brand
    static findByBrand(brand) {
        return Product.findAll({ where: { brand } });
    }
    //Find by category
    static findByCategory(category) {
        return Product.findAll({ where: { category } });
    }
    //Find by price range
    static findByPriceRange(minPrice, maxPrice) {
        return Product.findAll({
            where: {
                price: {
                    [Op.between]: [minPrice, maxPrice]
                }
            }
        });
    }

    static findByStock(stock) {
        return Product.findAll({ where: { stock } });
    }

    static create(data) {
        return Product.create(data);
    }
    static update(id, data) {
        return Product.update(data, { where: { id } });
    }
    static remove(id) {
        return Product.destroy({ where: { id } });
    }
}



module.exports = ProductRepository;
