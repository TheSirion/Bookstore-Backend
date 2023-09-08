import 'dotenv/config';

export const PORT = 5555;
export const mongoDbURL = `mongodb+srv://root:${process.env.MONGO_DB_PASSWORD}@books-store-mern.1wo7hsy.mongodb.net/books-collection?retryWrites=true&w=majority`;
