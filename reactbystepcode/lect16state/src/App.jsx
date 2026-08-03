import { useState } from "react";

function App()
{
  const [fruit,setfruit]=useState("shivam")

  const[name,update1]=useState("shivam");

  const handle1=()=>{
    update1("munnu")
  }

const handle=()=>{
  setfruit("munnu");
}

  return (
<div>
  <h1>{fruit}</h1>
  <h2>{name}</h2>
  <button onClick={handle}>click me</button>

  <button onClick={handle1}>handle1</button>
  
</div>
  );
}

export default App;