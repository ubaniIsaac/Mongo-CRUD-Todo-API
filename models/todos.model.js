const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');


const todosSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            default: () => uuidv4().replace(/\-/g, ""),
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }, {
    timestamps: true,
    collection: 'todos'
}
)

todosSchema.statics.addTodo = async function (
    title,
    description,
) {
    try {
        const todo = await this.create({ title, description })
        return todo
    } catch (error) {
        throw error
    }
}

todosSchema.statics.getAllTodos = async function () {
    try {
        const todos = await this.find()
        return todos;
    } catch (error) {
        throw error
    }
}

todosSchema.statics.getTodoById = async function (id) {
    try {
        const todo = await this.findOne({ _id: id });
        if (!todo) throw ({ error: 'No todo with this id found' })
        return todo
    } catch (error) {
        throw error;
    }
}

todosSchema.statics.deleteTodoById = async function (id) {
    try {
        const todoExists = await this.findOne({ _id: id })
        if (!todoExists) throw ({ error: 'No todo with this id found' })
        const result = await this.deleteOne({ _id: id })
        return result
    } catch (error) {
        throw error;
    }
}

todosSchema.statics.updateTodo = async function (id, title,
    description,) {
    try {
        const todo = await this.updateOne({ _id: id }, { title, description })
        return todo
    } catch (error) {
        throw error
    }


}


module.exports = mongoose.model("Todo", todosSchema)

