import React, { useState } from 'react';
import './App.css';
import { type } from 'os';
import Inputfileds from './components/Inputfileds';
import { Todo } from './components/modele';
import Todolist from './components/Todolist';


const App:React.FC =()=> {
  const [todo, settodo]=useState<string>("")
  const [todos, settodos]=useState<Todo[]>([])

  const handleadd=(e:React.FormEvent)=>{
e.preventDefault()
if(todo) {
  settodos([...todos, {id:Date.now(), todo, isDone:false} ])
  settodo("")
}

  };

 console.log(todos)
  return (
    <div className="App">
      <span className='heading'>   Todo app 
</span>
<Inputfileds todo={todo} settodo={settodo} handleadd={handleadd}/>
<Todolist todos={todos} settodos={settodos}/>



    </div>
  );
}

export default App;
