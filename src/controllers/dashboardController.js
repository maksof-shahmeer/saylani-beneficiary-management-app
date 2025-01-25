import Beneficiary from "../models/Beneficiary.js";
import Token from "../models/Token.js";
import Log from "../models/Log.js"; // Assuming there is a model for logs like this

// Fetch daily insights
export const getDashboardInsights = async (req, res) => {
  try {
    // Total visitors categorized as new/returning
    const newBeneficiaries = await Beneficiary.countDocuments({ firstVisit: true });
    const returningBeneficiaries = await Beneficiary.countDocuments({ firstVisit: false });

    // Department-wise activity stats
    const departmentStats = await Beneficiary.aggregate([
      { $group: { _id: "$department", count: { $sum: 1 } } }
    ]);

    // Tokens (Active/Completed)
    const activeTokens = await Token.countDocuments({ status: "Active" });
    const completedTokens = await Token.countDocuments({ status: "Completed" });

    res.status(200).json({
      insights: {
        newBeneficiaries,
        returningBeneficiaries,
        departmentStats,
        activeTokens,
        completedTokens
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching dashboard insights", details: error });
  }
};

// Search beneficiaries by CNIC, phone number, or name
export const searchBeneficiaries = async (req, res) => {
  const { searchTerm } = req.query; // CNIC, phone number, or name

  try {
    const results = await Beneficiary.find({
      $or: [
        { cnic: searchTerm },
        { phoneNumber: searchTerm },
        { name: { $regex: searchTerm, $options: "i" } }
      ]
    });

    res.status(200).json({ searchResults: results });
  } catch (error) {
    res.status(500).json({ error: "Error searching records", details: error });
  }
};

// Access detailed logs for audits
export const getLogs = async (req, res) => {
  try {
    const logs = await Log.find().sort({ createdAt: -1 }); // Sort by creation date, descending
    res.status(200).json({ logs });
  } catch (error) {
    res.status(500).json({ error: "Error fetching logs", details: error });
  };

};

export const getAllUsers = async (req, res) => {
  try {
    const { userId } = req;

    const users = await User.find({ _id: { $ne: userId } });

    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ error: "Error fetching users", details: err.message });
  }
};
