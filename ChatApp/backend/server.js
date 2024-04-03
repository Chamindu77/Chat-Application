// Package import
import express from "express";
import dotenv from "dotenv";

// File import
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

// Variables
const app = express();
const PORT = process.env.PORT || 5000;

// .env config
dotenv.config();


//app.get("/",(req,res)=>{
    // root route http://localhost:8000/
    //res.send("Hello chamindu");
//});


// Midlware
app.use(express.json()); // to parse the incoming requests with JSON payload (from req.body)

app.use("/api/auth",authRoutes)



app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server Running on port ${PORT}`)
});



