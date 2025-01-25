import mongoose from "mongoose";

const beneficiarySchema = new mongoose.Schema({
  cnic: {
    type: String,
    required: true,
    unique: true, 
    minlength: 13,
    maxlength: 13,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
    validate: {
      validator: (value) => /^(\+92|0)?3\d{9}$/.test(value),
      message: "Invalid phone number format.",
    },
  },
  address: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
    enum: ["Financial Aid", "Medical Assistance", "Education Support"], 
  },
  token: {
    type: String,
    required: true,
    unique: true, 
  },
  department: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "Pending",
  },
  history: [
    {
      action: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
      remarks: {
        type: String,
        required: false,
      },
    },
  ],
});

const Beneficiary = mongoose.model("Beneficiary", beneficiarySchema);

export default Beneficiary;
