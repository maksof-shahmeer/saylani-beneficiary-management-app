import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.cookies.auth_token; 

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token." });
  }
};

export default verifyToken;
