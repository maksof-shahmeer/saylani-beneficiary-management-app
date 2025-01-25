import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/database.js";
import userRoutes from "./src/routes/userRoutes.js";
import beneficiaryRoutes from "./src/routes/beneficiaryRoutes.js";
import tokenRoutes from "./src/routes/tokenRoutes.js";
import departmentRoutes from "./src/routes/departmentRoutes.js";
import dashboardRoutes from "./src/routes/dashboardRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/beneficiaries", beneficiaryRoutes);
app.use("/api/tokens", tokenRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/dashboard", dashboardRoutes);

export default app;
