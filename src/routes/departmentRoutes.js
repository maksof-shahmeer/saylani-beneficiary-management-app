import express from "express";
import { createDepartment, getAllDepartments, updateDepartment } from "../controllers/departmentController.js";
import verifyToken from "../middlewares/authMiddleware.js";


const router = express.Router();

router.post("/", verifyToken,createDepartment); 
router.get("/", verifyToken,getAllDepartments); 
router.put("/:id/:name",verifyToken, updateDepartment);

export default router;
