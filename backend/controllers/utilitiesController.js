const asyncHandler = require("express-async-handler");

const Utility = require("../models/utilityModel");

// @desc    Get Utilities
// @route   GET /api/utilities
// @access  Private

const getUtilities = asyncHandler(async (req, res) => {
  const utilities = await Utility.find();

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
  await utility.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getUtilities,
  setUtility,
  updateUtility,
  deleteUtility,
};
