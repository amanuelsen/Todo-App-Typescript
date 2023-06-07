import React, { useRef } from 'react'
import "./styles.css"
interface Props{
    todo:string,
    handleadd:(e:React.FormEvent)=> void,
    settodo:React.Dispatch<React.SetStateAction<string>>
}



const InputFields: React.FC<Props> = ({ todo, settodo, handleadd }) => {
    const inputref=useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(e)=>{
        handleadd(e)
        inputref.current?.blur()
    } } className='input'
    >
      <input ref={inputref} value={todo} type='input' onChange={(e)=> settodo(e.target.value)} placeholder='enter a task' className='input__box' />
      <button className='input_submit' type='submit'>
        go
      </button>
    </form>
  );
};

export default InputFields;

