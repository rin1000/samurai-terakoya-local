for (let i = 1; i <= 10; i += 1) {
    console.log(i);
}

// 変数numに0～4までのランダムな整数を代入する
let num = Math.floor(Math.random() * 5);

// 変数numの最初の値を出力する（確認用）
console.log('最初の値は' + num + 'です');

// 変数numの値が0以外である間、変数numの値を出力し続ける
while (num !== 0) {
 // 変数numに0～4までのランダムな整数を再代入する
 num = Math.floor(Math.random() * 5);

 // 次の条件式で比較される、変数numの現在の値を出力する
    console.log('現在の値は' + num + 'です');
}

// 配列の宣言と値の代入を行う
const userNames = ['侍太郎', '侍一郎', '侍二郎', '侍三郎', '侍四郎'];

// 配列の値を出力する
console.log(userNames);

// 2番目の要素を更新する
userNames[1] = '侍花子';

// 6番目に要素を追加する
userNames[5] = '侍五郎';

// 配列の値を出力する
console.log(userNames);

 // 3番目の要素を出力する
console.log(userNames[2]);