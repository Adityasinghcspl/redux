import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GrSubtractCircle } from "react-icons/gr";
import { RiAddCircleLine } from "react-icons/ri";
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from "./action/index"

function App() {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onClick={()=>dispatch(decNumber())}>
      <GrSubtractCircle />
      </button>
      {myState}
      <button onClick={() => dispatch(incNumber())}>
        <RiAddCircleLine />
      </button>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
