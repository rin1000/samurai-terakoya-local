const onClickAdd = () => {
    //テキスト内容の取得
    const inputText = document.getElementById("add-text").value;
    //テキストボックスに空文字を追加して初期化
    document.getElementById("add-text").value = "";
    createIncompleteTodo(inputText);
};

const createIncompleteTodo = (todo) => {
    //li生成
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-row";
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = todo;

    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click",() => {
        const moveTarget = completeButton.closest("li");
        completeButton.nextElementSibling.remove();
        completeButton.remove();
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        //liタグの直下のdivタグの子タグに追加
        backButton.addEventListener("click",() => {
            const todoText = backButton.previousElementSibling.innerText;
            createIncompleteTodo(todoText);
            backButton.closest("li").remove();
        });
        moveTarget.firstElementChild.appendChild(backButton);
        document.getElementById("complete-list").appendChild(moveTarget);
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click",() => {
        const deleteTarget = deleteButton.closest("li");
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    });


    div.appendChild(p);
    li.appendChild(div);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    document.getElementById("incomplete-list").appendChild(li);


    
}

document.getElementById("add-button").addEventListener("click",onClickAdd);