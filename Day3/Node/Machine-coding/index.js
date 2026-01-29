import express from 'express';
import dotenv from 'dotenv';
import { ConnectDB } from './config/db.js';
import { UserRouter } from './routes/userRoute.js';
dotenv.config();

const app = express();
app.use(express.json())
ConnectDB();

app.use("/api", UserRouter)

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log("Server running on 3000")
})