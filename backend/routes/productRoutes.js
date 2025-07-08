const express = require('express');
const controller = require('../controllers/productController');
const validate = require('../middlewares/validate');
const { productCreateSchema, productUpdateSchema } = require('../schema/productSchema');
const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/',validate(productCreateSchema) ,controller.create);
router.put('/:id', validate(productUpdateSchema)  ,controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
