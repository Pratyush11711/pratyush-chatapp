import express from "express"
import dotenv, { config } from "dotenv"
dotenv.config();
const app = express();
const PORT =process.env.PORT||5000
import authRoutes from "./authRoutes/auth.routes.js"
import messageRoutes from "./authRoutes/message.routes.js"
import userRoutes from "./authRoutes/user.routes.js"

import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectToMongoDB.js";

app.use(express.json());
app.use(cookieParser())




app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);




app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`)
})