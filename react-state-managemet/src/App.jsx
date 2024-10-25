import { useState } from 'react'
const NameList =()=>{
  const [list,setList] = useState(["aka","were","ferat"]);
  const [name,setName] = useState("")
  const addName =()=>
  {
    setList([...list,name])
  }
  return(
    <>
    <input type ="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
    <ul>
      {list.map((item,key)=><li key = {key}>{item}</li>)}
    </ul>
    <button onClick={addName}>add</button>
    </>
  )
}
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
  <Counter/>
<NameList/> 
  </>
 ) 
  
}
export default App
