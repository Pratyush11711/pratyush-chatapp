import express from "express";
import path from "path"
import dotenv, { config } from "dotenv"
dotenv.config();

const PORT =process.env.PORT||5000
import authRoutes from "./authRoutes/auth.routes.js"
import messageRoutes from "./authRoutes/message.routes.js"
import userRoutes from "./authRoutes/user.routes.js"

import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const __dirname = path.resolve();



app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});