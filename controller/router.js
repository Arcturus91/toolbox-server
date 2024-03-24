const express = require("express");
const { filesFormatter, healthCheck } = require("./routeHandler");
const router = express.Router();

router.get("/", healthCheck);
router.get("/files/data", filesFormatter);

module.exports = router;
