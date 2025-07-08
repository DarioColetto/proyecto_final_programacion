const Joi = require('joi');
/**
 * Product schema for validating product data.
 * 
 * @module schema/productSchema
 * @description
 * This schema defines the structure and validation rules for product data,
 */

// Joi for create Product
const productCreateSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  brand: Joi.string().required(),
  cathegory: Joi.string().regex(/^[^\d]+$/).required().messages({
    'string.pattern.base': '"cathegory" must not contain numbers'
  }),
  stock: Joi.number().integer().min(0).default(0),
});

// Joi for update Product
const productUpdateSchema = Joi.object({
    name: Joi.string().optional(),
    price: Joi.number().optional(),
    brand: Joi.string().optional(),
      cathegory: Joi.string().regex(/^[^\d]+$/).required().messages({
    'string.pattern.base': '"cathegory" must not contain numbers'
  }),
    stock: Joi.number().integer().min(0).default(0).optional(),
    });

module.exports = {
  productCreateSchema,
  productUpdateSchema
};    