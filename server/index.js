const express = require("express");
const app = express();
const products = require("../products.json");

app.get("/api/products", (req, res) => {
  res.status(200).send(products);
});
app.listen(3001, () => {
  console.log("Server listening 3001");
});
