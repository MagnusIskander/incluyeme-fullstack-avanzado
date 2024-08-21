const mongoose = require('mongoose');
const Book = require('../models/BookModel');


exports.getBooks = async (req, res) => {
  try
  {
    const books = await Book.find();
    res.json(books);
  }
  catch (err)
  {
    res.status(500).json({ message: err.message });
  }
};

exports.getBookById = async (req, res) => {
  try
  {
    const book = await Book.findById(req.params.id);
    if (book)
    {
      res.json(book);
    }
    else
    {
      res.status(404).json({ message: 'Libro no encontrado' });
    }
  }
  catch (err)
  {
    res.status(500).json({ message: err.message });
  }
};


exports.createBook = async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    year: req.body.year,
  });
  
  try
  {
    const nuevoBook = await book.save();
    res.status(201).json(nuevoBook);
  }catch (err)
  {
    res.status(400).json({ message: err.message });
  }
};

exports.updateBook = async (req, res) => {
  try
  {
    const book = await Book.findById(req.params.id);
    if (book)
    {
      book.title = req.body.title || book.title;
      book.author = req.body.author || book.author;
      book.description = req.body.description || book.description;
      book.year = req.body.year || book.year;
      
      const bookActualizado = await book.save();
      res.json(bookActualizado);
    }
    else
    {
      res.status(404).json({ message: 'Libro no encontrado' });
    }
  }catch (err)
  {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteBook = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
  {
    return res.status(400).json({ message: 'ID no válido' });
  }

  try
  {
    const book = await Book.findById(req.params.id);
    if (book)
    {
      await book.deleteOne();
      res.json({ message: 'Libro eliminado' });
    }
    else
    {
      res.status(404).json({ message: 'Libro no encontrado' });
    }
  }
  catch (err)
  {
    res.status(500).json({ message: err.message });
  }
};
