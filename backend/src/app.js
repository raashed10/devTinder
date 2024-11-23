const express = require("express");
const app = express();
const port = 5555;

app.get(
    "/user", 
    (req,res,next) => {
        console.log("handling the user route");
        next();
    },

    (req, res, next) => {
        console.log("handling the 2nd user");
        // res.send("2nd response");
        next();
    },

    (req,res,next) => {
        console.log("handling the 3rd user");
        // res.send("3rd response");
        next();
    },

    (req,res,next) => {
        console.log("handling the 4th user");
        // res.send("4th response");
        next();
    },

    (req,res,next) => {
        console.log("handling the 5th user");
        res.send("5th response");
        },
)

app.listen(port, () => {
    console.log(`server is successfully listening on port ${port}`); 
});