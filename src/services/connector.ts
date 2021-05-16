import mongoose from "mongoose";

let isAlreadyCall = false;

const initialConnection = () => {
    if (isAlreadyCall || !process.env.DB_HOST) return
    const mongoDB = process.env.DB_HOST || '';
    mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    db.once('open', function() {
        console.log('successfully connect to mongoDB')
        isAlreadyCall = true;
    });
}

export default initialConnection
export { default as BooksServices} from './bookServices'