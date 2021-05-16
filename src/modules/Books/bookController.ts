import {BooksServices} from '../../services/connector';
import { ApolloError } from 'apollo-server';

export interface IBookView {
    title: string,
    author: string
}

export const createBooks = async (root: any, data: any) => {
    try {
        const book = await BooksServices.addBooks({
            title: data.title,
            author: data.author
        })
        return book
    } catch (err) {
        throw new ApolloError("Ehh error", 'MY_ERROR_CODE');
    }
}

export default {
    createBooks
}