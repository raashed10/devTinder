const express = require("express");
const connectDB = require('./config/database');
const app = express();
const port = 5555;
const User = require("./models/user")

app.post("/signup", async (req, res) => {
    const userObj = {
        firstName : "Mohammed",
        lastName : "Raashed",
        emailId : "raashed@gmail.com",
        password : "12345"
    }

    //creating the new instance of the user model
    const user = new User(userObj);

    try {
        await user.save();
        res.send("user added successfully..");
    }
    catch(err){
        res.status(400).send("Error saving the user");
    }

})

// still learning and didnt pushed my (database-api)'s file on github
// right now added it to .gitignore in future will add it to .env file

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

