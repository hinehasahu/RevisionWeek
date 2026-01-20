import cookieParser from "cookie-parser";
import express from "express";
import { UserRouter } from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/user", UserRouter)

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
});
