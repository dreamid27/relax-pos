import mongoose, { model, Model, Schema } from "mongoose";

export interface ISalesDetails extends Document {
  name: string;
  price: number;
}

export interface ISales extends Document {
  customerName: string;
  orderDate: string;
  details: ISalesDetails[];
  total: number;
}

const SalesDetailSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const SalesSchema: Schema = new Schema({
  customerName: { type: String, required: true },
  orderDate: { type: Date, required: true },
  details: [SalesDetailSchema],
  total: { type: Number, required: true },
});

const Sales: Model<ISales> = model("Sales", SalesSchema);

export default Sales;
