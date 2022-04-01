const express = require("express");
const router = express.Router();
const {
  getUtilities,
  setUtility,
  updateUtility,
  deleteUtility,
} = require("../controllers/utilitiesController");

router.route("/").get(getUtilities).post(setUtility);

router.route("/:id").put(updateUtility).delete(deleteUtility);

module.exports = router;
