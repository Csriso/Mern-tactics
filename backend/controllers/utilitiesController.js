const asyncHandler = require("express-async-handler");

// @desc    Get Utilities
// @route   GET /api/utilities
// @access  Private

const getUtilities = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get utilities" });
});

// @desc    Set Utilities
// @route   POST /api/utilities
// @access  Private

const setUtility = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Add a text field");
  }
  res.status(200).json({ message: "Set Utility" });
});

// @desc    Update Utility
// @route   PUT /api/utilities/:id
// @access  Private

const updateUtility = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update utility ${req.params.id}` });
});
// @desc    Delete Utility
// @route   DELETE /api/utilities/:id
// @access  Private

const deleteUtility = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete utility ${req.params.id}` });
});

module.exports = {
  getUtilities,
  setUtility,
  updateUtility,
  deleteUtility,
};
