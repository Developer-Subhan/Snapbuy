const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");
const { isLoggedIn, isAdmin, validateProduct } = require("../middleware");

router.route("/")
  .get(productController.getAllProducts)
  .post(isLoggedIn, validateProduct, productController.createProduct);

router.route("/:id")
  .get(productController.getProductById)
  .put(isLoggedIn, isAdmin, validateProduct, productController.updateProduct)
  .delete(isLoggedIn, isAdmin, productController.deleteProduct);

module.exports = router;

