import { useState } from "react";

function App(){
  
const[count,update]=useState(0);

const handle=()=>{
  update(count+1);
}



  return(
    <div>
      <h2>{count}</h2>
      <button onClick={handle}>click</button>
    </div>
  )
}


export default App;