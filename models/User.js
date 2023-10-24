const mongoose = require("mongoose");

var Schema = mongoose.Schema;
// Create a schema
var userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" },
    tokens: [
        {
            token: {
                type: String,
            }
        }
    ],
    likedMovies: Array,
},
    {
        timestamps: true,
    });



module.exports = mongoose.model("User", userSchema);