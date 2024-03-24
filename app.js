const express = require("express");
const router = require("./controller/router");
const app = express();

app.use("/api", router);

app.listen("3000", () => {
  console.log("server listening");
});
