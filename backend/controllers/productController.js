const service = require('../services/productService');

class ProductController {
  /**
   * Controller for managing products.
   * Provides methods to handle HTTP requests for product operations.
   * @class ProductController
   * @module controllers
   * @requires services/productService
   */

  getAll(req, res) {

    service.getAll()
    .then(products => {
      res.json(products) 
      })
    .catch(error => {
      console.error("Error en getAll:", error);
      res.status(500).json({ error: "Error fetching products" });
    });
  }


  

  async getById(req, res) {
    try {
      const id = req.params.id;
      const product = await service.getById(id);
      if (!product) return res.status(404).json({ error: "Product not found" });
      res.json(product);
    } catch (error) {
      console.error("Error en getById:", error);
      res.status(500).json({ error: "Error fetching product" });
    }
  }

  async create(req, res) {
    try {
      const newProduct = await service.create(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      console.error("Error en create:", error);
      res.status(500).json({ error: "Error creating product" });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const updated = await service.update(id, req.body);
      res.status(200).json({"modifided":updated, "ok": true});
    } catch (error) {
      console.error("Error en update:", error);
      res.status(500).json({ error: "Error updating product" });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const deleted = await service.delete(id);
      if (!deleted) return res.status(404).json({ error: "Product not found" });
      res.status(204).json({message:"Producto elminado"}); 
    } catch (error) {
      console.error("Error en delete:", error);
      res.status(500).json({ error: "Error deleting product" });
    }
  }
}

module.exports = new ProductController();