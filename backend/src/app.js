const express = require("express");
const app = express();
const port = 7777;

app.get("/", (req, res) => {
    res.send("hello there!!")
})

app.listen(port);