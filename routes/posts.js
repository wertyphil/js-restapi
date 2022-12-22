const router = require("express").Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

router.get("/:postId", async (req, res) => {
    const { postId } = req.params;
    try {
        const post = await Post.findById(postId);
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

router.post("/", async (req, res) => {
    const post = new Post({
        ...req.body,
    });

    try {
        const savedPost = post.save();    
        res.json(savedPost);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

router.patch("/:postId", async (req, res) => {
    const { postId } = req.params;
    try {
        const updatedResult = await Post.updateOne({ _id: postId }, { $set: { ...req.body } });
        res.json(updatedResult);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

router.delete("/:postId", async (req, res) => {
    const { postId } = req.params;
    try {
        const removedResult = await Post.deleteOne({ _id: postId });
        res.json(removedResult);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

module.exports = router;