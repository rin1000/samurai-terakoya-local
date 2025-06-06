import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ColorfulMessage } from './compornents/ColorfulMessage'
import { ColorfulMessage2 } from './compornents/ColorfulMessage2'
import { useEffect } from 'react'

export const App = () => {
  const [num, setNum] = useState(0);
  const [isShowFace , setIsShowFace] = useState(true);
  const onClickCountUp = () => {
    // setNum(num + 1);
    //関数を書くこともでき、引数にはnumの現在の値が入ってくる
    // setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  }

  useEffect(() => {
    if (num > 0){
      if (num % 3 === 0) {
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      }
    }
  },[num]);


  return (
    <>
      <h1 style={{color:"red"}}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green" message="元気です！" />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>no/off</button>
      
      {isShowFace && <p>くぁwせdrftgyふじこ</p>}
    </>
  )
}

export default App
