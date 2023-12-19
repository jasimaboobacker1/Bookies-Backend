const books = require('../Models/Bookscema');

// booksell
exports.booksell = async (req, res) => {
    console.log('inside book sell function');
    const userId = req.payload;
    const bookImage = req.file;

   
    const { bookname, author, price } = req.body;

   
    const imageFileName = bookImage ? bookImage.filename : 'No Image';


    try {
        const newBook = new books({
            userId,
            bookname,
            author,
            price,
            bookImage: imageFileName 
        });

        await newBook.save();

        // Move the response inside the try block
        return res.status(200).json(newBook);
    } catch (err) {
        // Handle the error and send the response
        return res.status(401).json(`Request failed. Error: ${err}`);
    }
};

// get all books
exports.getallbooks = async(req,res)=>{
    try{
        const allbooks=await books.find()
        res.status(200).json(allbooks)

    }
    catch(err){
        res.status(401).json(`Error!!! ${err}`)

    }
}

// delete books

exports.deletebook = async(req,res)=>{
    const {bookid}=req.body
    try{
        await books.findByIdAndDelete({_id:bookid})
        res.status(200).json("Deleted")

    }
    catch(err){
        res.status(401).json(`Error!!! Transaction failed: ${err}`)

    }
}