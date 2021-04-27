const mongoose = require('@app/mongoose')

const { Schema } = mongoose

const todoSchema = new Schema(
  {
    name: String,
    text: String,
    completed: Boolean,
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },

  { timestamps: true }
)

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
