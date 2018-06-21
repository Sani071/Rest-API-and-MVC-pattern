const mongoose =  require('mongoose')
const Schema = mongoose.Schema
const bookSchema  = new Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    },
    publishYear:{
        type:String
    },
    page:{
        type:String,
        required:true
    },
    price:{
        type:String
    }
})
const Book = mongoose.model('Book',bookSchema)
module.exports = Book