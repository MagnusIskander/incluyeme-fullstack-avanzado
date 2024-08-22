import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Section from './components/section/Section';
import Footer from './components/footer/Footer';
import BooksList from './components/books/BooksList';
import BookDetail from './components/books/BookDetail';
import AddBook from './components/books/AddBook';
import EditBook from './components/books/EditBook';
import Library from './components/library/Library';


const App = () =>
{
  return (
    <Router>
      
      <div className="container">
        
        <Menu />
      
        <Header />

      
        <main>
          
          <Routes>

            <Route path="/" element={<Section />} />
            <Route path="/books" element={< BooksList />} />
            <Route path="/create-book" element={<AddBook />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/edit-book/:id" element={<EditBook />} />
            <Route path="/library" element={<Library />} />

          </Routes>

        </main>

        <Footer />
      
      </div>

    </Router>
  );
};


export default App;
