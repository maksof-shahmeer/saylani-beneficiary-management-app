import express from "express";
import {
  createToken,
  getTokenDetails,
  updateTokenStatus,
  getAllTokens,
} from "../controllers/tokenController.js";
import verifyToken from "../middlewares/authMiddleware.js";


const router = express.Router();
router.post("/", verifyToken, createToken);
router.get("/:tokenId", verifyToken, getTokenDetails);
router.patch("/:tokenId/:status", verifyToken, updateTokenStatus);
router.get("/", verifyToken, getAllTokens);

export default router;
