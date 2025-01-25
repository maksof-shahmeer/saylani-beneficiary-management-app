import express from "express";
import {
  createBeneficiary,
  getBeneficiaryByCNIC,
  updateBeneficiaryStatus,
  getAllBeneficiaries,
} from "../controllers/beneficiaryController.js";

const router = express.Router();

// Create a new beneficiary
router.post("/", createBeneficiary);

// Get a beneficiary by CNIC
router.get("/:cnic", getBeneficiaryByCNIC);

// Update a beneficiary's status
router.patch("/:cnic/status", updateBeneficiaryStatus);

// Get all beneficiaries
router.get("/", getAllBeneficiaries);

export default router;
