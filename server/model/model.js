const mongoose = require('mongoose')

const ListSchema = mongoose.Schema({
    ListItem: {
        type: String,

    }
})

module.exports = mongoose.model('list', ListSchema)