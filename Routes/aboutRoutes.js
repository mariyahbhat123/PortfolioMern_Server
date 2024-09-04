const express = require("express");
const aboutModel = require("../Models/aboutModel");
const router = express.Router();

router.post("/about", async (req, res) => {
  try {
    const { name, about } = req.body;
    const { img } = req.files;

    if (name && about) {
      await aboutModel.create({
        name: name,
        about: about,
        img: img,
      });
    } else {
      return res.status(400).json({ msg: "Please enter name && about" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/aboutGet", async (req, res) => {
  try {
    const aboutData = await aboutModel.find({});
    res.status(200).json({ about: aboutData, msg: "success" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
