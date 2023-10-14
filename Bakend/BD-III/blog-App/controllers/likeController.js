const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({
      post,
      user,
    });
    const savedLike = await like.save();

    //udate the post collection basis on this
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike } },
      { new: true }
    )
      .populate("likes")
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (error) {
    res.status(400).json({
      error: "error while updating post",
    });
    console.log(error);
  }
};

exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;

    //udate the post collection basis on this
    const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deletedLike._id } },
      { new: true }
    );
    res.json({
      post: updatedPost,
    });
  } catch (error) {
    res.status(400).json({
      error: "error while unliking post",
    });
  }
};
