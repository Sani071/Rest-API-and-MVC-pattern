const Book  =require('../model/bookModel')

const postNewBook= (req,res) => {

   const book = new Book({
       
       title:req.body.title,
       author:req.body.author,
       publisher:req.body.publisher,
       publishYear:req.body.publishYear,
       page:req.body.page,
       price:req.body.price
   })
   book.save()
   .then(data => {
       console.log(data)
       res.json({
           msg:`1 book added`,
           book:data
       })
   })
   .catch(err => console.log(err))
}
module.exports.postNewBook = postNewBook

const getAllBook= (req, res) => {
   Book.find()
   .then(books=>{
       res.json({
           msg:`${books.length} Books are founded`,
           book:books
       })
   })
}
module.exports.getAllBook = getAllBook

const getSingleBook = (req, res) => {
    const id = req.params.id
    Book.findOne({_id:id})
    .then(book=>{
        res.json({
            msg:"Book founded",
            Name:book.title,
            Author:book.author,
            Publisher:book.publisher,
            PublishYaer:book.publishYear,
            page:book.page,
            Price:book.price
        })
    })
}
module.exports.getSingleBook = getSingleBook

const deleteBook = (req, res) => {
     const id = req.params.id
     Book.findByIdAndRemove({
             _id: id
         })
         .then(book => {
             res.json({
                  msg: book.title + " (" + book.author + ") " + "is deleted successfully"
             })
         })
}
module.exports.deleteBook = deleteBook

