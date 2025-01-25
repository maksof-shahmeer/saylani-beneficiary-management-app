import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
  tokenId: { type: String, required: true, unique: true },
  cnic: { type: String, required: true },
  department: { type: String, required: true },
  status: { type: String, default: "Active" },
  createdAt: { type: Date, default: Date.now },
});

const Token = mongoose.model("Token", tokenSchema);

export default Token;
