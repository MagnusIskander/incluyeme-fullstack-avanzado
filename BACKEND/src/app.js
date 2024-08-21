'use strict';


// DEPENDENCIES
const express = require('express');
// const path = require('path');
// const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');

// const indexRouter = require('./routes/indexRouter');
const booksRouter = require('./routes/booksRouter');
// const uploadRouter = require('./routes/uploadRouter');

const app = express();

// SETTINGS
// app.use(express.static(path.join(__dirname, '../public')));
app.set('port', process.env.PORT || 8000);

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES
// app.use('/', indexRouter);
app.use('/api/books', booksRouter);
// app.use('/upload', uploadRouter);
// app.use((req, res, next) => {
//   res.status(404).render('error404', { title: 'Página no encontrada' });
// });

// DB CONNECTION
connectDB();

// SERVER
app.listen(app.get('port'), () => console.log(`Server running on http://localhost:${app.get('port')}/`));
