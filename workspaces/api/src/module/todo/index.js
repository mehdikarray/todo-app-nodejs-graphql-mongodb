const TodoTC = require('@app/module/todo/types')
const resolvers = require('@app/module/todo/resolvers')

for (const resolver in resolvers) {
  TodoTC.addResolver(resolvers[resolver])
}

module.exports = TodoTC
