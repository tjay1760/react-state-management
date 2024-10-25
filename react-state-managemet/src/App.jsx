import { useState } from 'react'

function Counter () {
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
const App =()=>{
 return(
<>
  <h1>her1</h1>
  <Counter/>
  <Counter/>
  <Counter/>
  <Counter/>
  </>
 ) 
  
}
export default App
