import express, {Request, Response} from "express";
import BookModel from "../model/bookModel";

export const getAllBooks = async (req: Request, res: Response) =>{
    try {
        const getBooks = await BookModel.find()
        if(getBooks.length > 0){
            return res.status(200).json({
                message: "Books Successfully Gotten",
                data: getBooks
            })
        }else{
            res.status(200).json({
                message: "Book Not Found"
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: "error occured"
        })
    }
}

export const getSingleBook = async (req: Request, res: Response) =>{
    try {
        const SingleBook = await BookModel.findById(req.params.bookId)
        return res.status(200).json({
            message: "Single Gotten Successfully",
            data: SingleBook
        })
    } catch (error) {
        return res.status(404).json({
            message: "error occured"
        })
    }
}

export const newBooks = async (req: Request, res: Response) =>{
    try {
        const {author_title,  author_name, isbn,  email,  author_image, book_title} = req.body
        const getAuthorIndex = await author_name.charAt(0).toUppercase();
        const getIsbn = await `${getAuthorIndex}_${Math.floor(
            Math.random() * 1000
        )}_${Math.floor(Math.random() * 1000)}`;

        const createBook = await BookModel.create({
            author_title,author_name,isbn,email, author_image, book_title
        });
        res.status(201).json({
            message: "Book Created Successfully",
            data: createBook
        })
    } catch (error) {
        return res.status(404).json({
            messahe: "error occured"
        })
    }
}

export const updateBooks = async (req: Request, res: Response) =>{
    try {
        const {author_title, cover_Image, Pice } =req.body
        const Update = await BookModel.findByIdAndUpdate(req.params.bookId, {author_title, cover_Image, Pice },
            {new: true} )
        return res.status(201).json({
            message: "Book Updaated Successfully",
            data: Update
        })
    } catch (error) {
        return res.status(404).json({
            message: "error occured"
        })
    }
}

export const deleteBooks = async(req: Request, res: Response) =>{
    try {
        const deleting = await BookModel.findByIdAndDelete(req.params.bookId)
    } catch (error) {
        return res.status(404).json({
            message: "error occured"
        })
    }
}