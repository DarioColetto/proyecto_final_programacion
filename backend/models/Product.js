const { DataTypes } = require('sequelize');
const sequelize = require('../database');

/**
 * Product model representing a product in the e-commerce application.
 * 
 * @module models/Product
 * @requires sequelize
 * @description
 * This model defines the structure of the Product entity in the database,
 * including fields for id, name, price, brand, category, stock, description, and imageUrl.
 */
const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cathegory: {
    type: DataTypes.STRING,
    allowNull: false
  },

  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },


});

module.exports = Product;
