import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  staff: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Department staff IDs
});

const Department = mongoose.model("Department", departmentSchema);
export default Department;
