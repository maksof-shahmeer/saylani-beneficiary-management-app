import express from "express";
import {
  createBeneficiary,
  getBeneficiaryByCNIC,
  updateBeneficiaryStatus,
  getAllBeneficiaries,
} from "../controllers/beneficiaryController.js";
import verifyToken from "../middlewares/authMiddleware.js";


const router = express.Router();

router.post("/", verifyToken, createBeneficiary);
router.get("/:cnic", verifyToken, getBeneficiaryByCNIC);
router.patch("/:cnic/:status", verifyToken, updateBeneficiaryStatus);
router.get("/", verifyToken, getAllBeneficiaries);

export default router;
