import React,{useEffect, useState} from "react";
import ListItem from "./ListItem";
import "./List.css";

function List() {

  //reactive/state variable
  //all todo
  const [todos, setTodos] = useState([]);
  
  //this is key where we want to store our data in local storage
  const Local_Storage_Key='React-todo-app';

  //to get previously stored data from local storage
  useEffect(()=>{
    const storedTodos= JSON.parse(localStorage.getItem(Local_Storage_Key));
    if (storedTodos) setTodos(storedTodos);
  },[])

  //it updates the new todos in local storage
  useEffect(()=>{
    if(todos.length>0)
    localStorage.setItem(Local_Storage_Key,JSON.stringify(todos))
  },[todos]);

  //to delete a todo
  function deleteItem(id){
    setTodos(todos.filter((todo)=> todo.id!== id))
  }
  
  //input(new) todo
  const [todoInput, setTodoInput]= useState('');

  const handleInput= (e) => {
    setTodoInput(e.target.value)
  }
  const handleSubmit= (e) => {
    if(todoInput=='') return;
    setTodos([...todos,{id: Math.random()*100000, text: todoInput}]);//(...)is a spread operator which copy all the items in array and add it with the new one to make a whole new array
    setTodoInput('')
  }
  return (
    <div className="list-container">
        {/* todo-form */}
        <input className="input-field" type="text"  placeholder='Add todo' onChange={handleInput} value={todoInput}/>
        <button className="button" onClick={handleSubmit}>Add Todo</button>
        {/* {props.todos.map((todo) => (
            <ListItem text={todo.text} />
        ))} */}
        {/* dynamic rendering- it means if value of text gets updated, then it will automatically update in jsx(or html) also */}
      {todos.map((todo) => (
        <ListItem text={todo.text} id={todo.id} deleteItem={deleteItem}/>
      ))}
    </div>
  );
}

export default List;
