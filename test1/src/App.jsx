/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg*/
//import './App.css'//
/*function App(){
  return(
  <div>
    <img src={"image.jpg"} height={100} width={100}/>
    <br/>
    <br/>
    <img src={"image.jpg"} height={100} width={100}/>
  </div>
  )
}
export default App;*/
/*import Test from "./Test";
function App(){
  return(
    <div>
     <Test name="Ajayreddy" role="Trainer"/>
    </div>
  )
}
export default App;*/
/*import Test from './components/Test'

function App(){
  return(
    <div>
     <Test name="Ajayreddy" role="Trainer"/>
     <Test salary="150000"/>
    </div>
  )
}
export default App;*/
/*import Test from "./Components/Test"
const App = () => {
  return (
    <div>
      <Test/>
    </div>
  )
}

export default <App>*/
/*import {useState} from 'react'

const App = () => {
  const[name,setName]=useState("Ajay")
  return (
    <div>
      <center>
        <h1>{name}</h1>
        <br/>
        <button onClick={()=>setName("Ajay reddy")}>useState</button>
      </center>
    </div>
  )
}

export default <App>*/
import {useState} from 'react'

const App = () => {
  const [count,setCount]=useState(0);
  return (
    <div>
      <center>
        <h1>{count}</h1>
        <br/>
        <button onClick={()=>setCount(count+1)}>useState</button>
      </center>
    </div>
  )
}

export default App