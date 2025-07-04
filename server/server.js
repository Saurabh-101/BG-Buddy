import 'dotenv/config';
import express from 'express';
import cors from 'cors';


// App config 
const PORT = process.env.PORT || 4000;

const app = express();

// Initialise middleware
app.use(express.json());
app.use(cors());

// API routes

app.get('/',(req,res)=>{
    res.send("API working.");
})




app.listen(PORT, ()=>{
    console.log("Server running on port : "+PORT);
})