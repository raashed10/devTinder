const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/Auth");
const app = express();
const port = 5555;

app.use("/admin", adminAuth);
app.use("/user", userAuth);

app.get("/admin/getAllData", (req, res) => {
    res.send("All data send")
})

app.get("/user/home", userAuth, (req, res) => {
    res.send("data is ready to load")
})

app.listen(port, () => {
    console.log(`server is successfully listening on port ${port}`); 
});