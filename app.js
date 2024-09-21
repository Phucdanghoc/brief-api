const express = require('express');
const path = require('path');
const productApi = require('./apis/productApi');
const app = express();
const port =  3000;

app.use(express.static(path.join(__dirname, '/data')));

app.get("/api/product",(req,res) => productApi.getAll(req,res));
app.get("/api/product/:id",(req,res) => productApi.getById(req,res));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
