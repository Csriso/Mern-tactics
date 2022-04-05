const express = require("express");
const router = express.Router();
const {
  getUtilities,
  setUtility,
  updateUtility,
  deleteUtility,
} = require("../controllers/utilitiesController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getUtilities).post(protect, setUtility);

router.route("/:id").put(protect, updateUtility).delete(protect, deleteUtility);

module.exports = router;
