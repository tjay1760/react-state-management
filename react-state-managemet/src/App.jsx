import { useState } from 'react'

function App() {
const [count,setCount] = useState(10)
const addOne = () =>{
  setCount((count)=>count+1)
}
  return (
    <>
    <div className='App'></div>
    <button
    onClick={addOne}
    >Count = {count}</button>
    </>
  )
}

export default App
