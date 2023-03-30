const express = require('express');
const app = express();

const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/labMS"
mongoose.connect(uri).then(
    () => {console.log("Success");},
    err => {console.log(err);}
);

app.listen(3000, () => {
    console.log("Server is running");
})
