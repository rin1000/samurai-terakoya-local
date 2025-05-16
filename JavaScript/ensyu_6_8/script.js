const num1 = 50;

// もし定数numが10より大きいならば、「定数numは10より大きいです」という文字列を出力する
if (num1 > 10) {
    console.log('定数numは10より大きいです');
}
// 算術演算子を使った場合の戻り値を出力する
console.log(45 + 18);

// 比較演算子を使った場合の戻り値を出力する
console.log(45 > 18);

// 算術演算子を使った場合の戻り値を出力する
console.log(45 + 18);

// 比較演算子を使った場合の戻り値を出力する
console.log(45 > 18);

// 等価演算子を使った場合の戻り値を出力する
console.log('5' == 5);

// 厳密等価演算子を使った場合の戻り値を出力する
console.log('5' === 5);

// 変数numに0～4までのランダムな整数を代入する
let num2 = Math.floor(Math.random() * 5);

// 変数numの値を出力する（確認用）
console.log(num2);

// 変数numの値が4であれば、「大当たりです」という文字列を出力する
if (num2 === 4) {
    console.log('大当たりです');
}
//========= 前略 ========

// 変数numに0～4までのランダムな整数を代入する
let num3 = Math.floor(Math.random() * 5);

// 変数numの値を出力する（確認用）
console.log(num3);

// 変数numの値が4であれば、「大当たりです」という文字列を出力する
if (num3 === 4) {
    console.log('大当たりです');
}
// 変数numの値が3であれば、「当たりです」という文字列を出力する
else if (num3 === 3) {
    console.log('当たりです');
}
// それ以外のときは、「はずれです」という文字列を出力する
else {
    console.log('はずれです');
}

num3 = 20;

// &&（かつ）を記述して、すべての条件が成り立つ場合にのみ処理を行う（変数numの値が11～29）
if (num3 > 10 && num3 < 30) {
    console.log('変数numは10より大きく、30より小さいです');
} else {
    console.log('条件が成り立ちませんでした');
}

num3 = 30;

// ||（または）を記述して、1つでも条件が成り立てば処理を行う（変数numの値が10または30）
if (num3 === 10 || num3 === 30) {
    console.log('変数numは10または30です');
} else {
    console.log('条件が成り立ちませんでした');
}

//========= 前略 ========

// 変数numに0～4までのランダムな整数を代入する
let num4 = Math.floor(Math.random() * 5);

// 変数numの値を出力する（確認用）
console.log(num4);

// 変数numの値が4であれば、「大当たりです」という文字列を出力する
if (num4 === 4) {
    console.log('大当たりです');
}
// 変数numの値が3であれば、「当たりです」という文字列を出力する
else if (num4 === 3) {
    console.log('当たりです');
}
// それ以外のときは、「はずれです」という文字列を出力する
else {
    console.log('はずれです');
}

//========= 前略 ========

// 変数numに0～4までのランダムな整数を代入する
num5 = Math.floor(Math.random() * 5);

// 変数numの値を出力する（確認用）
console.log(num5);

// 変数numの値によって、出力する文字列を切り替える
switch (num5) {
    case 2:
        console.log('小吉です');
        // break;
        break;
    case 3:
        console.log('中吉です');
        // break;
        break;
    case 4:
        console.log('大吉です');
        // break;
        break;
    default:
        console.log('末吉です');
        // break;
        break;
}