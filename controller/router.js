const express = require("express");
const filesFormatter = require("./routeHandler");
const router = express.Router();

router.get("/files/data", filesFormatter);

module.exports = router;
