// Seed File (run this to insert more books into the database)
// -----------------------------------------------------------------------------
// connects seed.js to the .env file
require("dotenv").config();

const mongoose = require("mongoose");

// get the Book model to do our database query
const Book = require("../models/book-model.js");

// get the book data from the JSON file
const bookData = require("./books.json");

// 🚨🚨🚨 CONNECT TO THE SAME DATABASE AS app.js 🚨🚨🚨
// connect to the MongoDB server with database name equal to the project name
// (also has console.logs for successful and failed connections)
mongoose
  .connect("mongodb://localhost/express-library", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Book.insertMany(bookData)
  .then(bookResults => {
    console.log(`Inserted ${bookResults.length} BOOKS 📙`);
  })
  .catch(err => {
    console.log("Insert FAILURE!! 💩", err);
  });
