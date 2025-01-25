import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  cnic: { type: String, required: true },
  action: { type: String, required: true },
  remarks: { type: String },
  timestamp: { type: Date, default: Date.now },
});

const Log = mongoose.model("Log", logSchema);
export default Log;
