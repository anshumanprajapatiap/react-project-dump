
import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from "./components/Header";

export default function App() {
  const [count, setCount] = useState(0);

  function handleAdd(){
    setCount(count+1);
  }
  function handleAdd2(){
    setCount(count => count+1);
    setCount(count => count+1);
  }
  function handleSub(){
    setCount(count-1)
  }
  function handleReset(){
    setCount(0);
  }




  return (
    <>
      {/* <Header/> */}
      <div className="box">
        <p>{count}</p>
        <button onClick={handleAdd} className="add">Add</button>
        <button onClick={handleReset} className="reset">Reset</button>
        <button onClick={handleSub} className="sub">Sub</button>
        <button onClick={handleAdd2} className='add'>Add 2</button>

        <
      </div>

    </>
  );
}
