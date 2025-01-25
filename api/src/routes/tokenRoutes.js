import express from "express";
import {
  createToken,
  getTokenDetails,
  updateTokenStatus,
  getAllTokens,
} from "../controllers/tokenController.js";

const router = express.Router();

// Create a token
router.post("/", createToken);

// Get a token by ID
router.get("/:tokenId", getTokenDetails);

// Update a token's status
router.patch("/:tokenId/status", updateTokenStatus);

// Get all tokens
router.get("/", getAllTokens);

export default router;
