import React, { useEffect, useReducer } from 'react'
import { useState } from 'react'

interface Todo {
  id: number;
  task : string;
  completed : boolean;
}

const Todo = () => {

  const[todo, setTodo] = useState<Todo[]>([]);
  const addTodo = (task : string) => {
    const newTodo : Todo = {
      id : todo.length + 1,
      task,
      completed: false,
    };

    setTodo((prevTodo) => [
      ...prevTodo,newTodo
    ])

  }

  return (
    <div>
      <input type="text"  placeholder='Enter task...'/>
      <button onClick={() => addTodo("New Todo")} >Add</button>

      <ul>
        {todo.map((todo) => (
          <li>{todo.task}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo