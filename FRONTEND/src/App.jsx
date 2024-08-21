import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Section from './components/section/Section';
import Footer from './components/footer/Footer';
import BooksList from './components/books/BooksList';
import BookDetail from './components/books/BookDetail';
import CreateBook from './components/books/CreateBook';
import EditBook from './components/books/EditBook';


function App()
{
  return (
    <Router>
      
      <div className="container">
      
        <Header />

        <Menu />
        
        <main>
          
          <Routes>

            <Route path="/" element={<Section />} />
            <Route path="/books" element={< BooksList />} />
            <Route path="/create-book" element={<CreateBook />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/edit-book/:id" element={<EditBook />} />

          </Routes>

        </main>

        <Footer />
      
      </div>

    </Router>
  );
}


export default App;
