const {check}=require('express-validator')


const validateBook=[
    check("title").notEmpty().withMessage("title is required").isString("the title must be a string"),
    check("author").notEmpty().withMessage("the author is required").isString("the author is must be a string")
]

module.exports={validateBook}