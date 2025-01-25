import Beneficiary from "../models/Beneficiary.js";

// Create a new beneficiary
export const createBeneficiary = async (req, res) => {
  const { cnic, name, phone, address, purpose, department } = req.body;

  try {
    const token = `TKN-${Date.now()}`;
    const beneficiary = new Beneficiary({ cnic, name, phone, address, purpose, department, token });
    await beneficiary.save();
    res.status(201).json({ message: "Beneficiary registered successfully", token });
  } catch (error) {
    res.status(500).json({ error: "Error registering beneficiary", details: error });
  }
};

// Get a beneficiary by CNIC
export const getBeneficiaryByCNIC = async (req, res) => {
  const { cnic } = req.params;

  try {
    const beneficiary = await Beneficiary.findOne({ cnic });
    if (!beneficiary) return res.status(404).json({ message: "Beneficiary not found" });

    res.status(200).json(beneficiary);
  } catch (error) {
    res.status(500).json({ error: "Error fetching beneficiary", details: error });
  }
};

// Update beneficiary status
export const updateBeneficiaryStatus = async (req, res) => {
  const { cnic } = req.params;
  const { status } = req.body;

  try {
    const beneficiary = await Beneficiary.findOneAndUpdate({ cnic }, { status }, { new: true });
    if (!beneficiary) return res.status(404).json({ message: "Beneficiary not found" });

    res.status(200).json({ message: "Beneficiary status updated", beneficiary });
  } catch (error) {
    res.status(500).json({ error: "Error updating beneficiary status", details: error });
  }
};

// Get all beneficiaries
export const getAllBeneficiaries = async (req, res) => {
  try {
    const beneficiaries = await Beneficiary.find();
    res.status(200).json(beneficiaries);
  } catch (error) {
    res.status(500).json({ error: "Error fetching beneficiaries", details: error });
  }
};
