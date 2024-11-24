const express = require("express");
const connectDB = require('./config/database');
const app = express();
const port = 5555;

connectDB()
    .then(() => {
    console.log("Database connection was established..");
    app.listen(port, () => {
        console.log(`server is successfully listening on port ${port}`); 
    });
})
.catch((err) => {
    console.error("Database cannot be connected");
}) 

