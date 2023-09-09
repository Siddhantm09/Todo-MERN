
const mongoose = require('mongoose');

const uri = "mongodb+srv://siddhantmahato03:BikVg0KJW62UO6cC@todo.uak1ieu.mongodb.net/?retryWrites=true&w=majority";



module.exports = async () => {
    try {
        const client = await mongoose.connect(uri, {
            useNewUrlParser: true, useunifiedTopology: true
        })
        console.log(`MongoDB connected : ${client.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}