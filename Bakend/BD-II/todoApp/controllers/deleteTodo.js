const { now } = require("mongoose");
const Todo = require("../models/todo");

//define route handler
//delete router

exports.deleteTodo = async (req, res) => {
  try {
    //delete todo items from database
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);

    //response
    res.status(200).json({
      success: true,
      message: "deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error,
      message: "server error",
    });
  }
};
