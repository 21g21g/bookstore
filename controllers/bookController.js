const Book = require("../model/bookModel");
const errorHandler=require("../utils/errorHandler/errorHandler")
const createBook = async (req, res,next) => {
  try {
    // Create a new book from request body
    //make validation using express-validator.
    //form builder
    const insertBook = await Book.create(req.body);

    // Send the inserted book as a response
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: insertBook,
    });

    console.log("Request Body:", req.body);
  } catch (error) {
    return next(errorHandler(400, "The book is not created"));

    // Send an error response
    res.status(500).json({
      success: false,
      message: "Failed to create book",
      error: error.message,
    });
  }
};

const getBooks=async(req,res,next)=>{
  try{
    const getAllbook=await Book.find()
    if(!getAllbook){
      res.status(500).json({message:"there is no book"})
    }
    else{
      res.status(200).json({
        success:true,
        message:"this is all book",
        data:getAllbook


      })
    }

  }catch(error){
    return next(errorHandler(400, "The is no books"));

  }

}


const updateBook=async(req,res,next)=>{
  try{
    const {id}=req.params
    const updateBookid=await Book.findByIdAndUpdate(id,{$set:req.body},{new:true})
    res.status(201).json({
      success: true,
      message: "Book updated successfully",
      data:updateBookid
   
    });

  }
  catch(error){
    return next(errorHandler(400, "cannot find the  book in this id"));
  }

}
const getFavourite=async(req,res,next)=>{
  try{
      const getFav=await Book.find({favourite: true })   

      if(!getFav){
        console.log("there is no fav");
      }
      else{
        res.status(200).json({
          status:true,
          message:"this is favourite books",
          data:getFav
        })

      }

   }catch(error){
    return next(errorHandler(400, "cannot find favoutite book"));

   }
}
const deleteBook=async(req,res,next)=>{
  try{

    const {id}=req.params
    const deleteBook=await Book.findByIdAndDelete(id)
    if(!deleteBook){
      console.log("there is no book in this id");
    }
    else{
      res.status(200).json({
        message:"the book is deleted succesfully"
      })
    }

  }catch(error){
    return next(errorHandler(400, "you cannot delete this book"));

  }
}

module.exports = { createBook,updateBook,getBooks ,deleteBook,getFavourite};
