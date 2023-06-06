import React from 'react';
import './App.css';
import { type } from 'os';
import Inputfileds from './components/Inputfileds';


const App:React.FC =()=> {
  return (
    <div className="App">
      <span className='heading'>   Todo app 
</span>
<Inputfileds/>
    </div>
  );
}

export default App;
