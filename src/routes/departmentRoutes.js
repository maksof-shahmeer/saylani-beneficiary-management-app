import express from "express";
import { createDepartment, getAllDepartments, updateDepartment } from "../controllers/departmentController.js";

const router = express.Router();

router.post("/", createDepartment); // Create a new department
router.get("/", getAllDepartments); // Get all departments
router.put("/:id", updateDepartment); // Update a department by ID

export default router;
