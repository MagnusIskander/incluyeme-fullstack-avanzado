# Book Manager

This project is a web application for managing books, developed using React for the frontend and Node.js with Express for the backend. The application allows performing CRUD operations (Create, Read, Update, and Delete) on basic data such as title, author, description, and publication year of each book, using MongoDB as a database. Additionally, it has a section with a call to the Open Library API, listing search results with the term 'javascript'.

## Technologies Used

- **Frontend**: React, React Router, CSS, Axios
- **Backend**: Node.js, Express, Axios
- **Database**: MongoDB, Mongoose

## Project Structure

- **Frontend**: Source code in the `FRONTEND/` directory
- **Backend**: Source code in the `BACKEND/` directory

## Installation

### Backend

1. Navigate to the `BACKEND/` directory.

 cd backend

2. Install backend dependencies.
 npm install

3. Configure environment variables. Create a `.env` file in the `BACKEND/` directory and add the following line:

 MONGODB_URI=mongodb://localhost:27017/mi-base-de-datos

 PORT=8000

Be sure to replace `mi-base-de-datos` with the name of your MongoDB database.

4. Start the backend server.

 npm start

 or
    
 nodemon

### Frontend

1. Navigate to the `FRONTEND/` directory.

 cd frontend

2. Install frontend dependencies.

 npm install

3. Start the frontend development server.

 npm start

## Features

- **Book List**: View all available books.
- **Book Details**: View the details of a specific book.
- **Create Book**: Add a new book to the database.
- **Edit Book**: Modify the details of an existing book.
- **Delete Book**: Delete a book from the database.

## API Endpoints

- `GET /api/books` - Gets all books.
- `GET /api/books/:id` - Gets a book by ID.
- `POST /api/books` - Creates a new book.
- `PUT /api/books/:id` - Updates a book by ID.
- `DELETE /api/books/:id` - Deletes a book by ID.

## External API Call

The menu link called 'Open Library' leads to a list of results with the term 'javascript', through a GET call to the Open Library API ([https://openlibrary.org/](https://openlibrary.org/)) using the URI 'https://openlibrary.org/search.json?title=javascript'.
