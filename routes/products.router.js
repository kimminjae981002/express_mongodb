const express = require("express");
const productsRouter = express.Router();
const productsController = require("../controllers/products.controller");

productsRouter.post("/", productsController.createProduct);
productsRouter.get("/", productsController.getProducts);
productsRouter.get("/:productId", productsController.getProduct);
productsRouter.patch("/:productId", productsController.updateProduct);
productsRouter.delete("/:productId", productsController.daleteProduct);

module.exports = productsRouter;
