require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
//My routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

const app = express();

//DB connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(()=>{
    console.log("DB CONNECTED");
});
// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
//Routes
app.use("/api",authRoutes);
app.use("/api",userRoutes);
//Port
const port = process.env.PORT ||3000;
//starting the server
app.listen(port,()=>{
    console.log(`app is running at ${port}`);
})