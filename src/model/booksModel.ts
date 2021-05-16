import mongoose, { model, Model, Schema } from 'mongoose';

export interface IBook extends Document {
    title: string,
    author: string
}

const BookSchema: Schema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true}
});

const Book: Model<IBook> = model('Book', BookSchema)

export default Book