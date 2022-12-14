const express = require('express');
const cors = require('cors');
require("./config/db");

const userRouter = require("./routes/user.route");


const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true }));//when push data database take data
app.use(express.json());
app.use("/api/Nurse", userRouter);





//home router setup
app.get("/" , (req, res) => {
   res.sendFile(__dirname + "/./views/index.html");
});

//errorHandeling url wrong route error
app.use((req, res, next ) => {
   res.status(404).json({
    message : "Route Not Found!!"
 })
});

//server error handling server error
app.use(( err , req, res, next ) => {
   res.status(500).json({
    message : "Something Not Found!!"
 })
});


module.exports = app;