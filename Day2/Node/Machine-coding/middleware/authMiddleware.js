export const authMiddleware = (req, res, next) => {
  const isAuthenticated = req.cookies.auth;

  if (isAuthenticated === "true") {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};
