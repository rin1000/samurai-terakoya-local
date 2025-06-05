import { Routes, Route } from 'react-router-dom';

import { BookDetail } from './pages/books/BookDetail';
import { BookEdit } from './pages/books/BookEdit';
import { BookIndex } from './pages/books/BookIndex';
import { BookSearch } from './pages/books/BookSearch';
import { MuiTest } from './pages/MuiTest';
import { useRef, useState ,useEffect} from 'react'

function App() {
  const STORAGE_KEY = 'books'
  const [ books, setBooks ] = useState(()=>{
    const save = localStorage.getItem(STORAGE_KEY) 
    const initialValue = JSON.parse(save)
    return initialValue || []
  }) // 本の情報 配列
  


    // 初回マウント時に localStorage内データを useStateに持たせる
    // useEffect(()=>{ 
    //     if (localStorage.getItem(STORAGE_KEY)) {
    //         try { setBooks(JSON.parse(localStorage.getItem(STORAGE_KEY)))
    //         } catch(e) {
    //         console.log(e)}
    //     } 
    // }, [])
    // booksが更新されたらlocalStorageにも保存する
    useEffect(()=>{ 
        localStorage.setItem(STORAGE_KEY, JSON.stringify(books))
    }, [books])
    

  return (
    <>
      <Routes>
        <Route index element={<BookIndex />} />
        <Route path="search" element={<BookSearch books = {books}/>} />
        <Route path="edit" element={<BookEdit />} >
          <Route path=":id" element={<BookDetail />} />
        </Route>
      {/* <Route path="mui-test" element={<MuiTest />} /> */}
      </Routes>
    </>
  )
}

export default App
