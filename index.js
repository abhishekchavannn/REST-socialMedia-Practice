const express = require('express'); //server
const app = express();
const mongoose = require('mongoose'); //DB
const dotenv = require('dotenv'); //stores password for safety
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const port = 8000;

//This is how one connects to Mongo using mongoose
dotenv.config();
mongoose.connect(process.env.MONGO_URL)
.then(()=>
console.log('Database connected'));



//Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
//Api
app.use("/api/user", userRoute);
app.use("/api/auth",authRoute);

//Runs at port 8000
app.listen(port,()=>{
    console.log(`Server is running at port: ${port}`)
})



//app.get("/",(req,res)=>{
//     res.send("Welcome to homepage");
   
// })
// app.get("/users",(req,res)=>{
//     res.send("Welcome to user homepage");
   
// })

// app.get("/contact",(req,res)=>{
//     res.send("Contact to homepage");
   
// })