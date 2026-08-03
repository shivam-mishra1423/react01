import { useState } from "react";

function App(){

const[count,update]=useState(0);

const handle=()=>{
  update(count+1);
}

  return (
    <div>

    
    {
      count==0?<h1>count=0</h1>
      :count==1?<h1>count=1</h1>
      :count==2?<h1>count=2</h1>
      :count==3?<h3>count=3</h3>
      :null
    }
    <button onClick={handle}>button</button>

    </div>
  )
}


export default App;