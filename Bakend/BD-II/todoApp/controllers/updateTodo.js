const { now } = require("mongoose");
const Todo = require("../models/todo");

//define route handler

exports.updateTodo = async (req, res) => {
  try {
    //fetch all todo items from database
    const { id } = req.params;
    const { title, description } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: now() }
    );

    //response
    res.status(200).json({
      success: true,
      data: todo,
      message: "updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).jsona({
      success: false,
      error: error,
      message: "server error",
    });
  }
};
