const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

/* GET PROFILE */
router.get("/profile", auth, async (req, res) => {
  const user = await User.findById(req.userId).select("-password");
  res.json(user);
});

/* UPDATE PROFILE */
router.put("/profile", auth, async (req, res) => {
  const { name, phone, dob } = req.body;

  await User.findByIdAndUpdate(req.userId, {
    name,
    phone,
    dob,
  });

  res.json({ message: "Profile updated successfully" });
});

module.exports = router;
