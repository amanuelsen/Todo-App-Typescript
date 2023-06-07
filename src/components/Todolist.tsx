import React from 'react'
import "./styles.css"
import { Todo } from './modele'
import Singletodo from './Singletodo';

interface Props {
    todos:Todo[],
    settodos:React.Dispatch<React.SetStateAction<Todo[]>>;

}
const Todolist:React.FC<Props> = ({todos, settodos}) => {
  return (
    <div className='todos'>
        {todos.map((todo,i)=> (
            <Singletodo key={i} todo={todo} todos={todos} settodos={settodos}/>
        ))}
      
    </div>
  )
}

export default Todolist;