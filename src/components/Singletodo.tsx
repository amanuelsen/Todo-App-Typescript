import React, { useState } from 'react'
import { Todo } from './modele'
import {AiFillEdit, AiFillDelete} from "react-icons/ai"
import {MdDone} from "react-icons/md"
import "./styles.css"
import Todolist from './Todolist'

type Props={
    todo:Todo,
    todos:Todo[],
    settodos:React.Dispatch<React.SetStateAction<Todo[]>>;
    

}
const Singletodo:React.FC<Props> = ({todo, todos,settodos}) => {
    const [edit, setedit]=useState<boolean>(false)
    const [edittodo, setedittodo]=useState<string>(todo.todo)

    const handledone=(id:Number)=>{
settodos(todos.map((todo)=> todo.id===id?{...todo, isDone:!todo.isDone}: todo
    
))
    }
    const handledelete=(id:number)=>{
        settodos(todos.filter((todo)=>todo.id !== id))

    }

    const handlEdit=(e:React.FormEvent, id:number)=> {
        e.preventDefault()
        settodos(todos.map((todo)=> (
            todo.id === id? {...todo,todo:edittodo }: todo
        )))
        setedit(false)

    }

  return (
    <form className='todos__single' onSubmit={(e)=> handlEdit(e,todo.id )}>

        {edit ? (
            <input value={edittodo} className='todos__single--text' onChange={(e)=> setedittodo(e.target.value)}/>

        ):(
             todo.isDone ?(
                <s className='todos__single--text'>
                {todo.todo}
              </s>
           ):(
                <span className='todos__single--text'>
                {todo.todo}
              </span>
           ) 
        )}
       
     
      <div className=''>
        <span className="icon" onClick={()=>{
             if(!edit && !todo.isDone){
                setedit(!edit)
        }
        }}>
       <AiFillEdit/>
        </span>
        <span  className="icon" onClick={()=> handledelete(todo.id)}><AiFillDelete/></span>
        <span className="icon" onClick={()=> handledone(todo.id)}><MdDone/></span>

      </div>
    </form>
  )
}

export default Singletodo
