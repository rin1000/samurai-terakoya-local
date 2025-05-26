import "./todostyle.css";

const onClickAdd = () => {
    // テキストボックスの値を取得し、
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // li生成
    const li = document.createElement("li");
    // div生成
    const div = document.createElement("div");
    div.className = "list-row";

    //p生成
    const p = document.createElement("p");
    div.className = "todo-item";
    p.innerText = inputText;

    div.appendChild(p);
    li.appendChild(div);


    console.log(div);
}

document.getElementById("add-button").addEventListener("click",onClickAdd);