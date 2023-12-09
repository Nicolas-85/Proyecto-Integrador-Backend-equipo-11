const express = require("express");
const router = express.Router();

const controller = require("../../controllers/shop/shopController");

router.get ("/shop", controller.shopIndex);

router.get("/shop/item/:id", controller.itemGet);

router.post("/shop/item/:id/add", controller.itemAdd);

router.get("/shop/cart", controller.cartGet);

router.post("/shop/cart", controller.cartPost);

module.exports = router;