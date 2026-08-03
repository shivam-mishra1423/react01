import { useRef } from "react";

function App(){

  const name = useRef()

  const handle =() =>{
    name.current.focus()
  }

  return(
    <div>
      <input ref={name} type="text" placeholder ="enter your name" />
      <button onClick={handle}>focus on the button</button>
    </div>
  )
}


export default App;