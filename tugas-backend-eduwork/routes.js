const router = require("express").Router();

router.get("/", (req, res) => {
  const { page, total } = req.query;
  res.send({
    status: "Succesfully",
    message: "Welcome to Express JS Tutorial >> Routes",
    page,
    total,
  });
});

router.get("/product/:id", (req, res) => {
  res.json({
    id: req.params.id,
  });
});

router.get("/:category/:tag", (req, res) => {
  const { category, tag } = req.params;
  const { page, total } = req.query;
  res.json({
    category,
    tag,
    page,
    total,
  });
});

module.exports = router;
