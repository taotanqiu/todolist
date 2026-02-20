const express = require("express");
const Todo = require("../models/Todo.js");

const router = express.Router()

// CREATE  
router.post("/", async (req, res) => {
  const todo = await Todo.create(req.body)
  res.json(todo)
})

// READ
router.get("/", async (req, res) => {
  const todos = await Todo.find()
  res.json(todos)
})


// READ
router.get("/:id", async (req, res) => {
  const todo = await Todo.findById( req.params.id)
  res.json(todo)
})

// UPDATE
router.put("/:id", async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(todo)
})

// PATCH  
router.patch("/:id", async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(todo)
})

// DELETE
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id)
  res.json({ message: "Deleted" })
})

module.exports = router
