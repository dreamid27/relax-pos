import mongoose, { model, Model, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: string;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const Book: Model<IProduct> = model("Products", ProductSchema);

export default Book;
