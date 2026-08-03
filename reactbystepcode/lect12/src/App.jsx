import { useEffect, useState } from "react"

function App(){
  const[counter,setCount]=useState(0);

  const handle =()=>{
    setCount(counter+1);
  }

  function A(){
    alert("A is call");
  }



  useEffect (()=>{
  A();
  },[counter])

  
return(
<div>
  <button onClick={handle}>counter</button>
  {counter}
</div>
  )
}


export default App;