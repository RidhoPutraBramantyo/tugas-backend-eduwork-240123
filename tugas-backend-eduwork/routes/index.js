const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Express App" });
});

router.get("/json", (req, res) => {
  res.json({ message: "Ini halaman JSON" });
});

module.exports = router;
