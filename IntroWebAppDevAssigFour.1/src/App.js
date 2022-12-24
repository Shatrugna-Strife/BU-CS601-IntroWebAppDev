import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [t,setT] = useState("");
  return (
    <div className="App">
      <input placeholder='Enter your name' type="text" onChange={(e)=>setT(e.target.value)}/>
      <p>Hello {t}. Have a wonderful day.</p>
    </div>
  );
}

export default App;
