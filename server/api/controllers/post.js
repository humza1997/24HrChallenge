const express = require("express");
const router = express.Router();

const Post = require("../models/post");

router.get("/", async (req, res) => {
  try {
    const post = await Post.all;
    res.json({ post });
  } catch (err) {
    res.status(500).json({ err });
  }
});

// food show route

router.get("/id/:id", async (req, res) => {
  try {
    const post = await Post.findByID(parseInt(req.params.id));
    res.json(post);
  } catch (err) {
    res.status(404).json({ err });
  }
});

//food show route
router.get("/title/:id", async (req, res) => {
  try {
    const post = await Post.findByTitle(req.params.id);
    res.json(post);
  } catch (err) {
    res.status(404).json({ err });
  }
});

// // Create food route
router.post("/", async (req, res) => {
  try {
    const post = await Post.create(
      req.body.title,
      req.body.username,
      req.body.body
    );
    res.json(post);
  } catch (err) {
    res.status(404).json({ err });
  }
});

module.exports = router;
