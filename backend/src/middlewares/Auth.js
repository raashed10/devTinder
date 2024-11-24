const adminAuth = (req, res, next) => {
    console.log("Admin is getting authorized");
    const token = "xyz";
    const isAdminAutherized = token === "xyz";
    if(!isAdminAutherized){
        res.status(401).send("Not Authorized");
    } else {
        next();
    }
}

const userAuth = (req, res, next) => {
    console.log("User is getting authorized");
    const token = "xyz";
    const isUserAutherized = token === "xyz";
    if(!isUserAutherized){
        res.status(401).send("Not Authorized");
    } else {
        next();
    }
}

module.exports = {
    adminAuth,
    userAuth
}