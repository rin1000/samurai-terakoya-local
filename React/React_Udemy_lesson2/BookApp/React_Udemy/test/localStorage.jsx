import { useState } from "react"
import { useEffect } from "react"

export const LocalStorageTest = () => {
    const [ books, setBooks ] = useState([]) // 本の情報 配列
    const [ newBook, setNewBook] = useState('') // 追加する本
    const STORAGE_KEY = 'books'

    // 初回マウント時に localStorage内データを useStateに持たせる
    useEffect(()=>{ 
        if (localStorage.getItem(STORAGE_KEY)) {
            try { setBooks(JSON.parse(localStorage.getItem(STORAGE_KEY)))
            } catch(e) {
            console.log(e)}
        } 
    }, [])
    // booksが更新されたらlocalStorageにも保存する
    useEffect(()=>{ 
        localStorage.setItem(STORAGE_KEY, JSON.stringify(books))
    }, [books])
    // 追加
    const addBook = newBook => {
        if(!newBook) return
        setBooks([...books, newBook ])
        setNewBook('') 
    }
    // 削除
    const removeBook = id => {
        const newList = books.filter((book, index)=> index !== id ? book: null)
        setBooks(newList) 
    }

    return (<>
    <ul> { books.map((book, index) => (
        <li key={index}> {book} <button onClick={()=> removeBook(index)}>削除</button></li>))}
    </ul>
    <div>
        <input type="text" value={newBook} onChange={e => setNewBook(e.target.value)} />
        <button onClick={() => addBook(newBook)}>Add Book</button>
    </div>
    </>) 
}