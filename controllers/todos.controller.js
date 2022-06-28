const todosModel = require('../models/todos.model')

exports.addTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const todo = await todosModel.addTodo(title, description);
        return res.status(200).json({
            success: true,
            todo
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error
        })
    }
}

exports.getAllTodos = async (req, res) => {
    try {
        const todos = await todosModel.getAllTodos();
        return res.status(200).json({
            todos
        })
    } catch (error) {
        return res.status(500).json({ success: false, error: error })
    }
}

exports.getTodoById = async (req, res) => {
    try {
        const todo = await todosModel.getTodoById(req.params.id)
        return res.status(200).json({
            todo
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

exports.deleteTodoById = async (req, res) => {
    try {
        const todo = await todosModel.deleteTodoById(req.params.id)
        return res.status(200).json({
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}
exports.updateTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const todo = await todosModel.updateTodo(req.params.id, title, description);
        const updatedtodo = await todosModel.getTodoById(req.params.id)
        return res.status(200).json({
            success: true,
            updatedtodo
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error
        })
    }
}