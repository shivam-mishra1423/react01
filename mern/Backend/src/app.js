const express = require("express");
const cors = require("cors");

const app = express();

// ==========================
// Global Middlewares
// ==========================

app.use(cors());
app.use(express.json());

// ==========================
// Routes
// ==========================

// app.use("/api/auth", authRoutes);
// app.use("/api/contacts", contactRoutes);

// ==========================
// Default Route
// ==========================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Contact Manager API",
  });
});

// ==========================
// Export App
// ==========================

module.exports = app;