const MESSAGES = {
  // ==========================
  // Authentication
  // ==========================

  USER_REGISTERED: "User registered successfully.",
  LOGIN_SUCCESS: "Login successful.",
  LOGOUT_SUCCESS: "Logout successful.",

  USER_NOT_FOUND: "User not found.",
  EMAIL_ALREADY_EXISTS: "Email already exists.",
  INVALID_CREDENTIALS: "Invalid email or password.",
  INVALID_PASSWORD: "Invalid password.",

  TOKEN_REQUIRED: "Authentication token is required.",
  INVALID_TOKEN: "Invalid or expired token.",
  ACCESS_DENIED: "Access denied.",

  // ==========================
  // Contacts
  // ==========================

  CONTACT_CREATED: "Contact created successfully.",
  CONTACT_UPDATED: "Contact updated successfully.",
  CONTACT_DELETED: "Contact deleted successfully.",
  CONTACT_NOT_FOUND: "Contact not found.",

  // ==========================
  // Database
  // ==========================

  DATABASE_CONNECTED: "MongoDB connected successfully.",
  DATABASE_ERROR: "Database connection failed.",

  // ==========================
  // Common
  // ==========================

  VALIDATION_ERROR: "Validation failed.",
  SERVER_ERROR: "Internal server error.",
};

module.exports = MESSAGES;