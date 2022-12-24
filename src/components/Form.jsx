import React from 'react'
import {v4 as uuidv4} from 'uuid'

const Form = ({inputText,setInputText,todos,setTodos}) => {
    const inputTextHandler = ( e ) => {
         setInputText( e.target.value)
    }

    const submitTodohandler = ( e ) => { 
        e.preventDefault();
        setTodos( [
            ...todos,
            {
                text: inputText, completed: false, id:uuidv4()
            }
        ] );
        setInputText( "" );
    }
  return (
      <form>
          <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
          <button onClick={submitTodohandler} className='todo-button' type="submit">
            <i className='fas fa-plus-square'></i>
          </button>
          <div className='select'>
              <select name='todos' className='filter-todo'>
                  <option value="all">All</option>
                  <option value="completed">Completed</option>
                  <option value="uncompleted">Uncompleted</option>
              </select>
          </div>
      </form>
  )
}

export default Form