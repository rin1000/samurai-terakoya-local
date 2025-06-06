import { useState } from "react"

export const App =() => {

  const [engText ,setEngText] = useState([])
  const [jpText ,setJpText] = useState([])
  const [category ,setCategory] = useState([])

  const onChangeEngText = (e) => {
    setEngText(e.target.value);
  }
  const onChangeJpText = (e) => {
    setJpText(e.target.value);
  }

  const category = (e) => {
    setCategory(e.target.value);
  }

  return(
    <>
    単語管理アプリ
    <div className=""></div>
    <div className="">
      新しい単語を追加
      <input placeholder="英語" value={engText} onChange={onChangeEngText}/>
      <input placeholder="日本語" value={jpText} onChange={onChangeJpText}/>
      <select name="" placeholder="カテゴリーを選択" value={category} onChange={category}>
        <option value="1">選択肢のサンプル1</option>
        <option value="2">選択肢のサンプル2</option>
        <option value="3">選択肢のサンプル3</option>
      </select>
      <button>追加</button>
    </div>
    <div className="">
      登録済み
      <div>

        
      </div>
    </div>
    {/* Test */}
    

    </>
    
  )
}