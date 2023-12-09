const express = require("express");
const router = express.Router();

const controller = require("../../controllers/auth/authController");

router.get("/auth/login", controller.loginGet);

router.post("/auth/login", controller.loginPost);

router.get("/auth/register", controller.registerGet);

router.post("/auth/register", controller.registerPost);

router.get("/auth/logout", controller.logout);

module.exports = router;