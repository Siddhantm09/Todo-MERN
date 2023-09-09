const ListModel = require('../model/model')

const getTodoController = async (req, res) => {
    const allItems = await ListModel.find({})
    // console.log(allItems, 'allItems');
    res.send(allItems)
}
const createTodoController = async (req, res) => {
    await ListModel.create(req.body)
}
// const updateTodoController = async (req, res) => {
//     await ListModel.findByIdAndUpdate({ requestId: req.params.id,{}})
// }
const deleteTodoController = async (req, res) => {

    console.log(req.params.id, 'id');
    const item = await ListModel.findByIdAndDelete({ _id: req.params.id })
    console.log(item);
}

module.exports = { getTodoController, createTodoController, deleteTodoController }