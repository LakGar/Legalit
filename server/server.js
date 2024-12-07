import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

// Allow credentials from the specific origin
app.use(
  cors({
    origin: "http://localhost:3000", // Frontend origin
    credentials: true, // Allow cookies or credentials
  })
);

// Parse JSON body
app.use(express.json());

app.use(cookieParser());

import "./models/businessModel.js";
import "./models/userModel.js";
import "./models/subscriptionModel.js";
import "./models/chatModel.js";
import "./models/documentModel.js";
import "./models/folderModel.js";
import "./models/noteModel.js";
import "./models/teamModel.js";
import "./models/paymentModel.js";
import "./models/feedBackModl.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth", authRoutes);
import userRoutes from "./routes/userRoutes.js";
app.use("/api/users", userRoutes);
import businessRoutes from "./routes/businessRoutes.js";
app.use("/api/businesses", businessRoutes);
import documentRoutes from "./routes/documentRoutes.js";
app.use("/api/documents", documentRoutes);
import folderRoutes from "./routes/folderRoutes.js";
app.use("/api/folders", folderRoutes);
import noteRoutes from "./routes/noteRoutes.js";
app.use("/api/notes", noteRoutes);
import teamRoutes from "./routes/teamRoutes.js";
app.use("/api/teams", teamRoutes);

// Test Route
app.get("/test", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(process.env.PORT || 8000, () => {
  connectDB();
  console.log("Server is running on port", process.env.PORT || 8000);
});