import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import HomePage from '../src/pages/HomePage';
import BookPage from '../src/pages/BookPage';
import CategoryListPage from './pages/CategoryListPage';
import CategoryPage from './pages/CategoryPage';
import AuthorListPage from './pages/AuthorListPage';
import AuthorPage from './pages/AuthorPage';
import './App.css';
import {Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Header/>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/book' element={<BookPage />} />
                    <Route path='/book/:bookId' element={<BookPage />} /> 
                    <Route path='/category' element={<CategoryListPage />} />
                    <Route path='/category/:categoryName' element={<CategoryPage />} />
                    <Route path='/author' element={<AuthorListPage />} />
                    <Route path='/author/:authorName' element={<AuthorPage />} />
                </Routes>
            <Footer/>
        </div>
    );
}

export default App;
