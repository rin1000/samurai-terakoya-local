import {useState, useEffect} from 'react'

export const usePersist = STORAGE_KEY => {
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
            // eslint-disable-next-line
        }, [books])

    return [books, setBooks]
}