const router = require("express").Router();

router.get("/user", (req, res) => {
  res.send("user test successful");
});

router.post("/userpost", (req, res) => {
  const username = req.body.username;
});

module.exports = router;
