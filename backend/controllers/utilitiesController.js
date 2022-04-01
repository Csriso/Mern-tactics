// @desc    Get Utilities
// @route   GET /api/utilities
// @access  Private

const getUtilities = (req, res) => {
  res.status(200).json({ message: "Get utilities" });
};

// @desc    Set Utilities
// @route   POST /api/utilities
// @access  Private

const setUtility = (req, res) => {
  res.status(200).json({ message: "Set Utility" });
};

// @desc    Update Utility
// @route   PUT /api/utilities/:id
// @access  Private

const updateUtility = (req, res) => {
  res.status(200).json({ message: `Update utility ${req.params.id}` });
};
// @desc    Delete Utility
// @route   DELETE /api/utilities/:id
// @access  Private

const deleteUtility = (req, res) => {
  res.status(200).json({ message: `Delete utility ${req.params.id}` });
};

module.exports = {
  getUtilities,
  setUtility,
  updateUtility,
  deleteUtility,
};
