// クラスを定義する
class Product {
  // コンストラクタを使ってインスタンス化するときに初期化する
  constructor(name, price, category) {
    // インスタンス（オブジェクト）にプロパティを持たせる
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // メソッドを定義する
  describe() {
    console.log('この商品名は' + this.name + 'です。');
  }
}

// インスタンス化する
const shampoo = new Product('シャンプー', 500, '生活雑貨');
const coffee = new Product('コーヒー', 1500, '飲料');

// インスタンス（オブジェクト）の値を出力する
console.log(shampoo);
console.log(coffee);

// メソッドを呼び出す（実行する）
shampoo.describe();

// 通常のオブジェクトにメソッドを定義する
const user = {
  name: '侍太郎',
  age: 36,
  gender: '男性',
  greet: () => {
    console.log('よろしくお願いします！');
  }
}

// メソッドを呼び出す（実行する）
user.greet();

//======== 前略 ========

// HTML要素をidで取得し、中身を出力する
console.log(document.getElementById('first-list'));

// HTML要素をclassで取得し、中身を出力する
console.log(document.getElementsByClassName('heading'));
// 複数のHTML要素を取得し、定数に代入する
const headings = document.getElementsByClassName('heading');

// 複数のHTML要素を1つずつ取得し、中身を出力する
for (let i = 0; i < headings.length; i++) {
  console.log(headings[i]);
}
// HTML要素をCSSセレクタで取得し、中身を出力する（最初の1つ）
console.log(document.querySelector('h1'));
console.log(document.querySelector('#second-heading'));
console.log(document.querySelector('.list'));

// HTML要素をCSSセレクタで取得し、中身を出力する（すべて）
console.log(document.querySelectorAll('.heading'));
console.log(document.querySelectorAll('li'));v