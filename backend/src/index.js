import express from 'express';
import dotenv from "dotenv";
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { app, server } from './lib/socket.js';



dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "https://chatify-real-mern-project-frontend.onrender.com",
  credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(3000, () => {
  console.log(`Server is running on port ${PORT}!`);
  connectDB();
});
