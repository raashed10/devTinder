const express = require("express");
const connectDB = require('./config/database');
const app = express();
const port = 5555;
const User = require("./models/user")

app.use(express.json());

// adding users to the database
app.post("/signup", async (req, res) => {

    //creating the new instance of the user model
    const user = new User(req.body);
    try {
        await user.save();
        res.send("user added successfully..");
    }
    catch(err){
        res.status(404).send("Error occured during saving the user");
    }

})

// get users by email
app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId;
    try {
        const user = await User.findOne({emailId : userEmail});
        if (!user){
            res.status(404).send("User not found");
        } else {
            res.send(user);
        }
    } catch (err) {
        res.status(404).send("Something went wrong..")
    }
})

// FEED-API | getting all the users from the database
app.get("/feed", async(req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (err) {
        res.status(404).send("Something went wrong..")
    }
})

// deleting user from the database
app.delete("/user", async(req, res) => {
    const userId = req.body.userId;
    try {
        const user = await User.findByIdAndDelete(userId)
        res.send("User deleted successfully");
    } catch (err) {
        res.status(404).send("Something went wrong")
    }
})

// update data of the user
app.patch("/user", async(req, res) => {
    const userId =  req.body.userId;
    const data = req.body;

    try {
        const user = await User.findByIdAndUpdate(userId, data);
        res.send("User updated successfully");
    } catch (err) {
        res.status(404).send("couldnt update the information")
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

