import { useEffect, useState } from "react"
import axios from "axios";

export const App =() => {

  const [lists, setLists] = useState([])
  const [newLists, setNewLists] = useState({english: '', japanese: '', category: ''})

  const [weather, setWeather] = useState(null);

useEffect(()=>{
const fetchWeather = async () => {
    try {
      const response = await axios.get(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,weather_code&timezone=Asia%2FTokyo"
      );

      // レスポンスをOpenWeatherMap形式に変換
        const temp = Math.round(response.data.current.temperature_2m);
        const weatherCode = response.data.current.weather_code;

        // 天気コードから説明を生成
        const getWeatherDescription = (code) => {
          if (code <= 3) return '晴れ';
          if (code <= 48) return '曇り';
          if (code <= 67) return '雨';
          if (code <= 77) return '雪';
          return '雷雨';
        };


      setWeather({
        name: '東京',
        main: { temp: temp },
        weather: [{ description: getWeatherDescription(weatherCode) }]
      });
      console.log(response.data)
    } catch (e) {
      alert(e.message);
      console.log("error")
    }
  };
fetchWeather()
},[])


//   const openMeteoApiBase = 'https://api.open-meteo.com/v1/forecast';

//   const location = locationList[0];
//   const [weatherInfo, setWeatherInfo] = useState([]);

//   async function getUser() {
//   try {
//         // APIコールし気象情報取得
//         const res = await weatherClient.get(
//           `${openMeteoApiBase}?timezone=Asia/Tokyo&latitude=${location.lat}&longitude=${location.lon}&hourly=weather_code`
//         );
//         const weatherData = res.data.hourly;
//         const weatherDataByTime = weatherData.time.map((time, index) => {
//           return {
//             datetime: time,
//             weatherCode: weatherData.weather_code[index]
//           }
//         }, {});
//         setWeatherInfo(weatherDataByTime);
//       } catch (error) {
//         alert(error.message);
//       }
// }
// getUser()



  const onChangeEngText = (e) => {
    setNewLists({...newLists, english: e.target.value})
  }
  const onChangeJpText = (e) => {
    setNewLists({...newLists, japanese: e.target.value})
  }

  const selectCategory = (e) => {
    setNewLists({...newLists, category: e.target.value})
  }
  
  const onClickAdd = (e,index) => {
    e.preventDefault();
    if (newLists.english && newLists.japanese && newLists.category){
      setLists([...lists,newLists])
      setNewLists({english: '', japanese: '', category: ''})
    }
  }

  return(
    <>
    単語管理アプリ
    <div className="">
      y
    </div>
    <div className="">
      新しい単語を追加
      <input placeholder="英語" value={newLists.english} onChange={onChangeEngText}/>
      <input placeholder="日本語" value={newLists.japanese} onChange={onChangeJpText}/>
      <select placeholder="カテゴリーを選択" value={newLists.category} onChange={selectCategory}>
        <option value="">カテゴリを選択</option>
        <option value="fruit">果物</option>
        <option value="animal">動物</option>
        <option value="object">物</option>
        <option value="verb">動詞</option>
        <option value="color">色</option>
      </select>
      <button onClick = {onClickAdd}>追加</button>
    </div>
    <div className="">
      登録済み
      <ul>
        {/* lists がtrusyかどうか */}
        {lists && lists.map((word)=>{
          
          return(
            <li key={word}>
              <div>
                <p>{word.english}</p>
                <p>→</p>
                <p>{word.japanese}</p>
              </div>
              <div>
                <p>{word.category}</p>
                <button>削除</button>
              </div>
            </li>
          );
          })}
      </ul>
      
    <div>

        
      </div>
    </div>
    {/* Test */}
    

    </>
    
  )
}