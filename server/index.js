const express = require('express')
const cors = require('cors')
const dbConnect = require('./dbConnect')
const { createTodoController, updateTodoController, deleteTodoController, getTodoController } = require('./controllers/TodoController')
const app = express()

//middleware
app.use(express.json())
app.use(cors())

app.get('/', getTodoController)
app.post('/createTodo', createTodoController)
// app.put('/updateTodo', updateTodoController)
app.delete('/deleteTodo/:id', deleteTodoController)


const PORT = 9000
dbConnect()
app.listen(9000, () => {
    console.log(`Listening on port ${PORT}`)
})
