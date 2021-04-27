const { composeWithMongoose } = require('graphql-compose-mongoose')

const TodoModel = require('@app/module/todo/todo')

const TodoTC = composeWithMongoose(TodoModel)

module.exports = TodoTC
