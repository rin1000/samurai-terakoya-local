import { useState } from "react";
import { useRef } from "react";

export const ApiTest = () => {
    const keyword = useRef("")
    const [searchResult, setSearchResult] = useState([])
    const search = async keyword => {
        const baseUrl = 'https://www.googleapis.com/books/v1/volumes?'
        const params = { q: `intitle:${keyword.current.value}`, maxResults:40 }
        const queryParams = new URLSearchParams(params) // JSでクエリパラメータ生成
        console.log(baseUrl + queryParams)
        // fetchでJSON取得
        const response = await fetch(baseUrl + queryParams).then( response => response.json())
        console.log(response.items)
        // 必要な情報を配列にpush
        const newList = [] // 新しい配列作成
        response.items.map( book => { // JSONで渡ってきた情報を Array.pushで配列に追加
            const title = book.volumeInfo.title
            const img = book.volumeInfo.imageLinks
            const description = book.volumeInfo.description
            newList.push({ title: title ? title : '',image: img ? img.thumbnail : '',description: description ? description.slice(0, 40) : ''})
            setSearchResult(newList)
        })
    }

    return(<>
        <input type="text" ref={keyword} />
        <button onClick={() => search(keyword)}>検索する</button>
    </>);
}