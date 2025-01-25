import express from "express";
import { getLogs, getDashboardInsights, searchBeneficiaries, getAllUsers} from "../controllers/dashboardController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/logs", getLogs);
router.get("/insights", getDashboardInsights);
router.get("/searchUser", searchBeneficiaries);
router.get("/getAllUsers", getAllUsers);

export default router;
