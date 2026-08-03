import { useEffect } from "react";
import { useState } from "react";



function App(){

  const[counter,setcounter]=useState(0);

  const[counter2,secounter2]=useState(0);

  useEffect(()=>{
onecall();

  },[counter])



  

const handle =()=>{
  setcounter(counter+1);
}

  function onecall(){
  alert("single calling")
}







  return (
    <div>
      <h>{counter}</h>
      <br></br>
      <button onClick={handle}>counter</button> 

      <button onClick={handle}>counter</button> 

    </div>
  )
}

export default App;