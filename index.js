const express = require('express')

require('./config/mongo')
require('dotenv').config()

const todosRouter = require('./routes/todo.route')
const app = express();

const PORT = process.env.PORT || 3000;
app.set('port', PORT)


app.use(express.json());

app.use('/todos', todosRouter)


app.use('*', (req, res) => {
    return res.status(404).json({
        success: false,
        message: 'API endpoint doesnt exist'
    })
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});