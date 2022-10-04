const Todos = require('./todos')

const todos = new Todos()
console.log(todos.list());

todos.add('run code')
console.log(todos.list());

todos.add('cookm lasagna')
console.log(todos.list());

todos.complete('run code')
console.log(todos.list());