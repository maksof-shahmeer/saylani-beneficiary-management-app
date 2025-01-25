import Token from "../models/Token.js";

// Generate a new token
export const createToken = async (req, res) => {
  const { cnic, department } = req.body;

  try {
    const tokenId = `TKN-${Date.now()}`;
    const token = new Token({ tokenId, cnic, department });
    await token.save();
    res.status(201).json({ message: "Token generated successfully", token });
  } catch (error) {
    res.status(500).json({ error: "Error generating token", details: error });
  }
};

// Get token details by ID
export const getTokenDetails = async (req, res) => {
  const { tokenId } = req.params;

  try {
    const token = await Token.findOne({ tokenId });
    if (!token) return res.status(404).json({ message: "Token not found" });

    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({ error: "Error fetching token details", details: error });
  }
};

// Update token status
export const updateTokenStatus = async (req, res) => {
  const { tokenId } = req.params;
  const { status } = req.body;

  try {
    const token = await Token.findOneAndUpdate({ tokenId }, { status }, { new: true });
    if (!token) return res.status(404).json({ message: "Token not found" });

    res.status(200).json({ message: "Token status updated", token });
  } catch (error) {
    res.status(500).json({ error: "Error updating token status", details: error });
  }
};

// Get all tokens
export const getAllTokens = async (req, res) => {
  try {
    const tokens = await Token.find();
    res.status(200).json(tokens);
  } catch (error) {
    res.status(500).json({ error: "Error fetching tokens", details: error });
  }
};
