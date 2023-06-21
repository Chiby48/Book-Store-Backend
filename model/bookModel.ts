import mongoose from "mongoose";
import {iBooks} from "../utils/interface"

interface Books extends iBooks, mongoose.Document{}

const BookSchema = new mongoose.Schema({
    author_title:{
        type: String,
        unique: true,
    },
    author_name:{
        type: String,
        unique: true,
    },
    author_image:{
        type: String,
    },
    descriptions:{
        type: String,
    },
    book_title:{
        type: String,
        unique: true,
    },
    cover_image:{
        type: String,
    },
    email:{
        type: String,
        unique: true,
    },
    view:{
        type: String,
    },
    isbn:{
        type: String,
    },
    price:{
        type: String,
    },
})

const BookModel = mongoose.model<Books>("BookStore", BookSchema)


export default BookModel;