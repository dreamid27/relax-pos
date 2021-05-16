import Book, { IBook } from '../model/booksModel';

export interface IBookServices {
    title: string,
    author: string
}

export const addBooks = async (obj: IBookServices) => {
    try {
        const book: IBook = await Book.create({
            title: obj.title,
            author: obj.author
        });
        
        return book;
    } catch (err) {
        console.log(err, 'err')
        throw err;
    }  
}

export default {
    addBooks
}