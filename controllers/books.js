const Book = require('../models/Book')



module.exports = {
    getBooks:  async (req,res)=>{
        console.log(req.user)
        console.log(req.user.id)
        try{
            const bookItems = await Book.find({userId:req.user.id})
            const itemsLeft = await Book.countDocuments({userId:req.user.id,completed: false})
            res.render('books.ejs', {books: bookItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createBooks: async (req, res)=>{
        try{
            await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            userId: req.user.id,
            completed:false,
        })
            console.log('Book has been added!')
            console.log({title})
            res.redirect('/books')
        }catch(err){
            console.log(err)
        }
    },





}