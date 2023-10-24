const dotenv = require("dotenv");
const express = require("express");
var app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const cookieParser = require('cookie-parser')

dotenv.config({ path: './config.env' });
DB = process.env.DATABASE;
PORT = process.env.PORT || 5000;

// for deploying the project
if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
}


mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    () => console.log("Database Connected Successfully.")
).catch((error) =>
    console.log(`Error in Database Connection ${error}`)
)


app.use(express.json());
app.use(cookieParser())
app.use(authRoute);


app.listen(PORT, () => {
    console.log("Connected!");
})
