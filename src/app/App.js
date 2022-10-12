import { useState } from 'react';
import List from '../utils/List';

const bodyContainer={
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor:'#282c34'
}
const todoListContainer={
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor:'aqua',
  borderRadius: '10px',
  width: '600px',
  boxShadow:'0 0 10px 0',   
}
// const todos = [
//   {
//     id: 1,
//     text: "learn react",
//     isCompleted: false,
//   },
//   {
//     id: 2,
//     text: "learn node",
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     text: "learn mongo",
//     isCompleted: false,
//   },
//   {
//     id: 4,
//     text: "learn express",
//     isCompleted: false,
//   },
// ];

// const [todos,setTodos]=useState([
//   {
//     id: 1,
//     text: "learn react",
//     isCompleted: false,
//   },
//   {
//     id: 2,
//     text: "learn node",
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     text: "learn mongo",
//     isCompleted: false,
//   },
//   {
//     id: 4,
//     text: "learn express",
//     isCompleted: false,
//   },
// ])

function App() {
  return (
    <div style={bodyContainer}>
      <div style={todoListContainer}>
        <h1>TODO LIST</h1>
        
        <List />
      </div>

    </div>
  )
  }

export default App;
