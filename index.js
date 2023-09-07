import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDbURL } from "./config.js";
import booksRoutes from "./routes/BookRoutes.js";

const app = express();

// Middleware for parsing the request body
app.use(express.json());

// Middleware for handling CORS policy
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN stack tutorial");
});

app.use("/books", booksRoutes);

mongoose
  .connect(mongoDbURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port ${PORT}`);
    });
  })
  .catch(error => console.error("Error while connecting to database:", error));
