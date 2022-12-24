import React from 'react'
import Todo from './Todo'
const TodoList = ({todos,setTodos}) => {
  return (
      <div className="todo-container">
          <ul className='todo-list'>
              { todos && todos.map( ( todo) => (
                  <Todo todos={ todos } setTodos={ setTodos }  key={todo.id} text={ todo.text} />
              ))}
          </ul>
      </div>
  )
}

export default TodoList