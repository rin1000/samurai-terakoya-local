import { useState } from 'react'
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';
import './App.css'

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeText = (event) => {
    setTodoText(event.target.value)
  };
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos,todoText];
    setIncompleteTodos(newTodos)
    setTodoText("");
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos,incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index,1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
    
  }

  return (
    <>
    <InputTodo todoText ={todoText} onChange={onChangeText} onClick={onClickAdd}/>
    <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete(index)} onClickDelete={onClickDelete(index)} />
    <CompleteTodos todos={IncompleteTodos} onClickBack={onClickBack(index)}/>
    </>
  )
}

