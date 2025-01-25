import express from "express";
import { getLogs, getDashboardInsights, searchBeneficiaries, getAllUsers} from "../controllers/dashboardController.js";
import verifyToken from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/logs",verifyToken, getLogs);
router.get("/insights",verifyToken, getDashboardInsights);
router.get("/searchUser",verifyToken, searchBeneficiaries);
router.get("/getAllUsers",verifyToken, getAllUsers);

export default router;
