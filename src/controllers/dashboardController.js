import Beneficiary from "../models/Beneficiary.js";
import Token from "../models/Token.js";
import User from "../models/User.js";
import Log from "../models/Log.js"; 

export const getDashboardInsights = async (req, res) => {
  try {
    const newBeneficiaries = await Beneficiary.countDocuments({ firstVisit: true });
    const returningBeneficiaries = await Beneficiary.countDocuments({ firstVisit: false });

    const departmentStats = await Beneficiary.aggregate([
      { $group: { _id: "$department", count: { $sum: 1 } } }
    ]);

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

export const searchBeneficiaries = async (req, res) => {
  const { searchTerm } = req.query; 

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

export const getLogs = async (req, res) => {
  try {
    const logs = await Log.find().sort({ createdAt: -1 }); 
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
