// 東京都の天気予報データを取得するためのURL
const url = 'https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json';
// イベント処理の対象となるボタン
const button = document.getElementById('ajax-btn');

// ボタンのクリック時にイベント処理を実行する
button.addEventListener('click', () => {
    // 気象庁のWebサイトにリクエストを送信し、天気予報データを取得する
    fetch(url)
      // サーバーからAjaxレスポンスを受け取ったときの処理
        .then((response) => {
            // JSON形式のデータに変換
            return response.json();
        })
        .then((data) => {
            // JSONデータから「東京の明日の天気」を抽出して表示
            const weather = data[0].timeSeries[0].areas[0].weathers[1];
            console.log('東京の明日の天気：' + weather);
        });
});

// 気象庁のWebサイトにリクエストを送信し、天気予報データを取得する
fetch(url)
  // サーバーからAjaxレスポンスを受け取ったときの処理
    .then((response) => {
    // JSON形式のデータに変換
    return response.json();
    })
        .then((data) => {
        // JSONデータから「東京の明日の天気」を抽出して表示
        const weather = data[0].timeSeries[0].areas[0].weathers[1];
        console.log('東京の明日の天気：' + weather);
    });