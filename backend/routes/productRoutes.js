const express = require('express');
const controller = require('../controllers/productController');
const validate = require('../middlewares/validate');
const { productCreateSchema, productUpdateSchema } = require('../schema/productSchema');
const router = express.Router();

router.get("/", controller.getAll.bind(controller));
router.get('/:id', controller.getById.bind(controller));
router.post('/',validate(productCreateSchema) ,controller.create.bind(controller));
router.put('/:id', validate(productUpdateSchema)  ,controller.update.bind(controller));
router.delete('/:id', controller.delete.bind(controller));

module.exports = router;
