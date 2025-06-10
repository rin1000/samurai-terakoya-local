import { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);

        // Open-Meteo API（無料・キー不要）
        const latitude = 35.6762;
        const longitude = 139.6503;
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=Asia/Tokyo`;

        const response = await axios.get(url);

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
        setError(null);
      } catch (err) {
        setError('天気データの取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="bg-blue-100 p-4 rounded-lg mb-6 text-center">
        <p>天気情報を読み込み中...</p>
      </div>
    );
  }

  return (
    <div className="bg-blue-100 p-4 rounded-lg mb-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">今日の日付</p>
          <p className="font-semibold">{new Date().toLocaleDateString('ja-JP')}</p>
        </div>
        <div className="text-center">
          <div className="text-2xl mb-1">🌤️</div>
          <p className="text-sm text-gray-600">{weather.name}の天気</p>
          <p className="font-semibold">{weather.main.temp}°C</p>
          <p className="text-xs text-gray-500">{weather.weather[0].description}</p>
        </div>
      </div>
      {error && (
        <div className="mt-2 text-xs text-orange-600">
          {error}
        </div>
      )}
    </div>
  );
}

export default Weather;