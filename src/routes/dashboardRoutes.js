import express from "express";
import { getLogs, getDashboardInsights, searchBeneficiaries} from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/logs", getLogs);
router.get("/insights", getDashboardInsights);
router.get("/searchUser", searchBeneficiaries);

export default router;
