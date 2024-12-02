
const express=require("express")
const mongoose=require("mongoose")
const dotenv = require("dotenv").config(); 
const bookRoute=require("./routes/bookRoutes")
const app=express()
const url=process.env.MONGO_URI
app.use(express.json());
mongoose
.connect(url)
.then(()=>{
    console.log("mongodb is connected");
    app.listen(5000,()=>{
        console.log('the server is run on port number 5000');
    
    })
    
})
.catch((err) => {
    console.log(err);
  })
  ;

  app.use("/api/books",bookRoute)

