const http = require('http')
const express = require('express')

require('./config/mongo')

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

const server = http.createServer(app);

server.listen(PORT);
server.on("listening", () => {
    console.log(`Listening on port ${PORT}...`)
});