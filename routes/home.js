const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Hello World",
    message: "Api Worked",
  });
});

module.exports = router;
