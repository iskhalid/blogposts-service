const { PostService } = require("../services/index");

const postService = new PostService();

const create = async (req, res) => {
  try {
    const post = await postService.createPost(req.body);
    return res.status(201).json({
      data: post,
      success: true,
      message: "Successfully created post",
      err: {},
    });
  } catch (error) {
    console.log("something went wrong on the post controller");
    return res.status(500).json({
        data:{},
        success:false,
        message:"Failed to create post",
        err:error
    })
  }
};

const get = async (req, res) => {
    try {
      const post = await postService.getPost(req.params.id);
      return res.status(200).json({
        data: post,
        success: true,
        message: "Successfully fetched a post",
        err: {},
      });
    } catch (error) {
      console.log("something went wrong on the post controller");
      return res.status(500).json({
          data:{},
          success:false,
          message:"Failed to fetch post",
          err:error
      })
    }
  };

  const destroy = async (req, res) => {
    try {
      const response = await postService.deletePost(req.params.id);
      return res.status(200).json({
        success: true,
        message: "Successfully delete post",
        err: {},
      });
    } catch (error) {
      console.log("something went wrong on the post controller");
      return res.status(500).json({
          data:{},
          success:false,
          message:"Failed to delete post",
          err:error
      })
    }
  };

  const update = async (req, res) => {
    try {
      const post = await postService.updatePost(req.params.id,req.body);
      return res.status(201).json({
        data: post,
        success: true,
        message: "Successfully update the post",
        err: {},
      });
    } catch (error) {
      console.log("something went wrong on the post controller");
      return res.status(500).json({
          data:{},
          success:false,
          message:"Failed to update post",
          err:error
      })
    }
  };

  module.exports = {
    create,
    get,
    destroy,
    update
  }
