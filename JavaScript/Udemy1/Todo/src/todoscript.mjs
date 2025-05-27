import './todostyle.css';

const onClickAdd = () => {
    // テキストボックスの値を取得し、
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    completeIncompleteTodo(inputText);
    }

const completeIncompleteTodo = (todo) => {
    // li生成
    const li = document.createElement("li");
    // div生成
    const div = document.createElement("div");
    div.className = "list-row";

    //p生成
    const p = document.createElement("p");
    div.className = "todo-item";
    p.innerText = todo;

    // buttonタグ(削除)生成
    const compreteButton = document.createElement("button");
    compreteButton.innerText = "完了"
    compreteButton.addEventListener("click", () => {
        // 押された完了ボタンの親にあるliタグを配下の完了ボタンと削除ボタンを削除
        const moveTarget = compreteButton.closest("li");
        compreteButton.nextElementSibling.remove(); //nextElementSibling：次の要素の remove ：自身の削除
        compreteButton.remove();
        // 戻すボタンを生成してdivタグ配下に設定
        const backButton = document.createElement("button");
        backButton.innnerText = "戻す"
        backButton.addEventListener("click", () => {
            // Todo内容を取得し、未完了リストに追加
            const todoText = backButton.previousElementSibling.innerText;
            completeIncompleteTodo(todoText);
            //押された戻すボタンの親にあるliタグを削除
            backButton.closest("li").remove();
        });
        moveTarget.firstElementChild.appendChild(backButton);
        // 完了リストに移動
        document.getElementById("complete-list").appendChild(moveTarget);
    });

    // buttonタグ(削除)生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除"
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親にあるliタグを未完了リストから削除
        const deleteTarget = deleteButton.closest("li"); //要素の取得
        document.getElementById("incomplete-list").removeChild(deleteTarget); 
    });

    // liタグの子要素に各要素を追加
    div.appendChild(p);
    div.appendChild(compreteButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    // 未完了リストに追加(子要素に追加)
    document.getElementById("incomplete-list").appendChild(li);
    // console.log(div);

}

document.getElementById("add-button").addEventListener("click",onClickAdd);