import Department from "../models/Department.js";

export const createDepartment = async (req, res) => {
  try {
    const { name, description } = req.body;
    const department = new Department({ name, description });
    await department.save();
    res.status(201).json({ message: "Department created successfully", department });
  } catch (error) {
    res.status(500).json({ error: "Error creating department", details: error });
  }
};

export const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ error: "Error fetching departments", details: error });
  }
};

export const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const department = await Department.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json(department);
  } catch (error) {
    res.status(500).json({ error: "Error updating department", details: error });
  }
};
