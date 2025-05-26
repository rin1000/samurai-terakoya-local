/**
 * const,let等の変数宣言
 */


// var val1 = "var変数";
// console.log(var1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(var1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言"

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";
// // // Uncaught SyntaxError: Identifier 'val2' has already been declared 

// const val3 = "const変数";
// console.log(val3);

// // constは上書き不可
// val3 = "constを再宣言";
// // Uncaught TypeError: Assignment to constant variable.
// // constは再宣言不可
// const val3 = "const変数を再宣言";
// // Uncaught SyntaxError: Identifier 'val3' has already been declared

// // constで定義したオブジェクトのプロパティは変更可能
// const val4 = {
//     name: "じゃけぇ",
//     age: 31
// };
// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4)

// // constで定義した配列のプロパティは変更可能
// const val5 = ["dog","cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "じゃけぇ";
// const age = 31;

// // 「私の名前はじゃけぇです。年齢は３１歳です。」
// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age +"です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// // バッククォートをつかう
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);
/**
 * アロー関数
 */

// // 従来の関数
// function func1(str) {
//     return str;
// }

// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//     return str;
// }
// const func2 = str =>  str;
// // console.log(func2("func2です"));

// const func3 = (num1,num2) => {
//     return num1 + num2;
// }
// const func3 = (num1,num2) => ({
//     hoge:num1,
//     huga:num2
// })
// console.log(func3(10,20))

/**
 * 分割代入
 */
// const myProfile = {
//     name:"じゃけぇ",
//     age:31,
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const {name,age} = myProfile;

// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["じゃけぇ",31];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3)

// //変数名は自由に決められる
// const [name , age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト関数
 */

// const sayHallo = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHallo("じゃけぇ"); //こんにちは！じゃけぇさん！
// sayHallo(); //こんにちは！ゲストさん！


// const myProfile = {
//     age:31
// };
// const {age ,name = "ゲスト"} = myProfile;
// console.log(age);
// console.log(name);

/**
 * オブジェクトの省略記号
 */

// const name = "じゃけぇ";
// const age = 31;

// const myProfile = {name,age};
// console.log(myProfile)

/**
 * スプレット構文(...)
 */
// //配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = {num1, num2} => console.log(num1+ num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// //まとめる
// const  arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合(最頻出)
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterをつかった配列の処理
 */

// const nameArr = ["田中","山田","じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }
// const nameArr2 = nameArr.map((name) => {
//     console.log(name)
// });
// nameArr.map((name ,index) => console.log(`${index + 1}番目は${name}です。`));
// console.log(nameArr2);

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//     if (name === "じゃけぇ") {
//         return name;
//     } else {
//         return `${name}さん`;
//     }
// });
// console.log(newNameArr)

/**
 * 三項演算子
 */
// 条件式 ? 条件がtrueの時:条件がfalseのとき。
// const val1 = 1 > 0 ? "trueです":"falseです";
// console.log(val1);

// const num = 1300;
// // toLocaleString()：数値を三桁区切りにしてくれる
// console.log(num.toLocaleString());

// // typeof 変数:変数の型を返してくれる
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//     return num1 + num2 > 100 ? "100を超えています!!":"許容範囲内です";
// } 
// console.log(checkSum(40,50));

/**
 * 理論演算子の本当の意味を知ろう && ||
 */
// // truthy.falsyについて
// // "ABC", 0 10 undefined null false NaN "" [] ()
// const val = 0;
// if (val) {
//     console.log("valはtruthyです。")
// } else {
//     console.log("valはfalsyです。")
// }

// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//     console.log("1か2はtrueになります。")
// }
// if (flag1 && flag2) {
//     console.log("1も2はtrueになります。")
// }

// //　||は左辺がtruthyの場合、その時点で返却する。
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// //　&&は左辺がfalsyの場合、その時点で返却する。
// const num2 = undefined
// const fee2 = num2 && "何か設定されました"
// console.log(fee2);
