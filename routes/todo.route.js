const express = require('express');

const { addTodo, getAllTodos, getTodoById, deleteTodoById, updateTodo } = require('../controllers/todos.controller')

const todosRouter = express.Router();

todosRouter.post('/', addTodo)
todosRouter.put('/:id', updateTodo)
todosRouter.get('/', getAllTodos)
todosRouter.get('/:id', getTodoById)
todosRouter.delete('/:id', deleteTodoById)

module.exports = todosRouter;
