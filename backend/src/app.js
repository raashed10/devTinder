const express = require("express");
const app = express();
const port = 7777;

app.get("/user", (req, res) => {
    res.send({firstName : "Mohammed", lastName : "Raashed"});
})

app.post("/user", async (req, res) => {
    //database logic
    res.send("data successfully stored in database!!");
})

app.delete("/user", (req, res) => {
    // delete logic
    res.send("data deleted!!");
})

app.use("/test", (req, res) => {
    res.send("hello from the server!!");
})

app.listen(port);