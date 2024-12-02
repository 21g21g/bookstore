

const mongoose=require("mongoose")

const bookSchema=mongoose.Schema({

    title:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    isBn:{
        type:Boolean,
        require:true
        
    },
   publish_year:{
    type:String,
    require:true

   },
  
    favourite: {
        type: Boolean,
        default: false,
      }
   


})

const Book=mongoose.model("Book",bookSchema)

module.exports=Book