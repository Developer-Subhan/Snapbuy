const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order");
const { isLoggedIn, isAdmin, validateOrder } = require("../middleware");

router.route('/')
  .get(isLoggedIn, isAdmin, orderController.getAllOrders)
  .post(validateOrder, orderController.placeOrder);

router.put('/:id/status', isLoggedIn, isAdmin, orderController.updateOrderStatus);

router.get('/order-status/:id', orderController.getOrderStatus);

module.exports = router;

