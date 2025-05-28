
import { useState } from 'react'
import './Style.css'
import { InputTodo } from './compornents/InputTodo';
import { IncompleteTodos } from './compornents/IncompleteTodos';
import { CompleteTodos } from './compornents/CompleteTodos';

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [inCompleteTodos, setInCompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...inCompleteTodos, todoText];
    setInCompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...inCompleteTodos];
    newTodos.splice(index,1);
    setInCompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...inCompleteTodos];
    newIncompleteTodos.splice(index,1);
    const newCompleteTodos = [...completeTodos, inCompleteTodos[index]];
    setInCompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index,1);
    const newIncompleteTodos = [...inCompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setInCompleteTodos(newIncompleteTodos);
  };

  const isMaxLimitIncompleteTodos = inCompleteTodos.length >= 5;

  return (
    <>
    <InputTodo todoText={todoText} onChange = {onChangeTodoText} onClick = {onClickAdd} 
    disabled = {isMaxLimitIncompleteTodos}
    />
    {isMaxLimitIncompleteTodos && (
      <p>登録できるTODOは5個まで！</p>
    )}
    <IncompleteTodos todos = {inCompleteTodos} onClickComplete = {onClickComplete} onClickDelete = {onClickDelete}/> 
    <CompleteTodos todos = {completeTodos} onClick = {onClickBack}/>
    </>
  )
}

