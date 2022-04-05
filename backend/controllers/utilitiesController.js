const asyncHandler = require("express-async-handler");

const Utility = require("../models/utilityModel");
const User = require("../models/userModel");

// @desc    Get Utilities
// @route   GET /api/utilities
// @access  Private

const getUtilities = asyncHandler(async (req, res) => {
  const utilities = await Utility.find({ user: req.user.id });

  res.status(200).json(utilities);
});

// @desc    Set Utilities
// @route   POST /api/utilities
// @access  Private

const setUtility = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Add a text field");
  }

  const utilities = await Utility.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(utilities);
});

// @desc    Update Utility
// @route   PUT /api/utilities/:id
// @access  Private

const updateUtility = asyncHandler(async (req, res) => {
  const utility = await Utility.findById(req.params.id);

  if (!utility) {
    res.status(400);
    throw new Error("Utility not found");
  }
  const user = await User.findById(req.user.id);

  // Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Check correct user
  if (utility.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedUtility = await Utility.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedUtility);
});

// @desc    Delete Utility
// @route   DELETE /api/utilities/:id
// @access  Private

const deleteUtility = asyncHandler(async (req, res) => {
  const utility = await Utility.findById(req.params.id);

  if (!utility) {
    res.status(400);
    throw new Error("Utility not found");
  }

  const user = await User.findById(req.user.id);

  // Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Check correct user
  if (utility.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await utility.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getUtilities,
  setUtility,
  updateUtility,
  deleteUtility,
};
