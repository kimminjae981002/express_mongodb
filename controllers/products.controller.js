const productModel = require("../models/products.model");

async function createProduct(req, res, next) {
  try {
    const newProduct = await productModel.create(req.body);
    res.status(401).json(newProduct);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createProduct,
};
