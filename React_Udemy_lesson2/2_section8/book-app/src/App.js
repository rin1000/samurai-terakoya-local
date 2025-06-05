import './App.css';
import { MuiTest } from './pages/MuiTest';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './common/Layout';
import { BookDetail } from './pages/books/BookDetail';
import { BookEdit } from './pages/books/BookEdit';
import { BookIndex } from './pages/books/BookIndex';
import { BookSearch } from './pages/books/BookSearch';
import { useRef, useState } from 'react'

function App() {
  const [books, setBooks ] = useState([])
  const [newBook, setNewBook ] = useState('')
  const STORAGE_KEY = 'books'

  useEffect(()=>{
        if(localStorage.getItem(STORAGE_KEY)){
          try{
            setBooks(JSON.parse(localStorage.getItem(STORAGE_KEY)))
          } catch(e){
            console.log(e)
          }
        }
      }, [])
      useEffect(()=>{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(books))
      }, [books])
  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<BookIndex/>}/>
        <Route path='search' element={<BookSearch />} />
        <Route path='edit' element={< BookEdit />}>
          <Route path=':id' element={<BookDetail />}/>
        </Route>
        <Route path='mui-test' element={<MuiTest/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
