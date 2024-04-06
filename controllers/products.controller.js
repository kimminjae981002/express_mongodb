const productModel = require("../models/products.model");

async function createProduct(req, res, next) {
  try {
    const newProduct = await productModel.create(req.body);
    res.status(401).json(newProduct);
  } catch (error) {
    next(error);
  }
}

async function getProducts(req, res, next) {
  try {
    const products = await productModel.find();
    res.status(201).json(products);
  } catch (error) {
    next(error);
  }
}

async function getProduct(req, res, next) {
  try {
    const { productId } = req.params;
    const product = await productModel.findById(productId);
    res.status(20).json(product);
  } catch (error) {
    next(error);
  }
}

async function updateProduct(req, res, next) {
  try {
    const { productId } = req.params;
    const updateProduct = await productModel.findByIdAndUpdate(
      productId,
      req.body,
      { new: true }
    );
    res.status(200).json(updateProduct);
  } catch (error) {
    next(error);
  }
}

async function daleteProduct(req, res, next) {
  try {
    const { productId } = req.params;
    const deleteeProduct = await productModel.findByIdAndDelete(productId);
    res.status(200).json(deleteeProduct);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  daleteProduct,
};
