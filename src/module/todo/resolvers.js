const TodoModel = require('@app/module/todo/todo')

const createTodo = {
  name: 'createTodo',
  type: 'Todo!',
  args: { name: 'String!', completed: 'Boolean!', text: 'String!' },
  resolve: async ({ args: { name, completed, text }, context: { user } }) => {
    try {
      let todo = new TodoModel({
        name,
        text,
        completed
      })
      todo.users.push(user._id)
      todo.save(err => {
        if (err) return Promise.reject(err)
        return todo
      })
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

const shareTodo = {
  name: 'shareTodo',
  type: 'Todo!',
  args: { userId: 'Number!', todoId: 'Number!' },
  resolve: async ({ args: { userId, todoId } }) => {
    try {
      let todo = TodoModel.findById(todoId)
      todo.users.push(userId)
      todo.save(err => {
        if (err) return Promise.reject(err)
        return todo
      })
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

const updateTodo = {
  name: 'shareTodo',
  type: 'Todo!',
  args: { todoId: 'Number!', name: 'String!', completed: 'Boolean!', text: 'String!' },
  resolve: async ({ args: { todoId, name, completed, text } }) => {
    try {
      TodoModel.findByIdAndUpdate(
        { todoId },
        {
          name,
          text,
          completed
        },
        (err, result) => {
          if (err) {
            Promise.reject(err)
          } else {
            return result
          }
        }
      )
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

const deleteTodo = {
  name: 'shareTodo',
  type: 'Todo!',
  args: { todoId: 'Number!' },
  resolve: async ({ args: { todoId } }) => {
    try {
      TodoModel.findByIdAndRemove({ todoId }, (err, result) => {
        if (err) {
          Promise.reject(err)
        } else {
          return result
        }
      })
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

module.exports = {
  createTodo,
  shareTodo,
  updateTodo,
  deleteTodo
}
