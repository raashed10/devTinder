const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    
    firstName : {
        type : String,
        required : true,
        minLength : 4
    },
    
    lastName : {
        type : String
    },

    emailId : {
        type : String,
        lowercase : true,
        required : true,
        unique : true,
        trim : true
    },

    password : {
        type : String,
        required : true
    },

    age : {
        type : Number,
        min : 18
    },

    gender : {
        type : String,
        validator(value) {
            if (!["male", "female", "other"].includes(value)){
                throw new Error("Gender-data not valid");
            }
        }
    },

    photoUrl : {
        type : String,
        default : "https://www.vhv.rs/viewpic/ihmxhJ_dummy-image-of-user-hd-png-download/"
    },

    about : {
        type : String,
    },

    skills : {
        type : [String]
    }
}, {
    timestamps : true
})

const User = mongoose.model("User", userSchema);

module.exports = User;