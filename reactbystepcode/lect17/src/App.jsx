import { useState } from "react";

function App()
{
  const[display,setDisplay]=useState(true);


const handle= () =>{
  setDisplay(false);
}

  return (


    
    <div>{ 
     display? <h1>shiva mishra</h1>:null
    }

    <button onClick={handle}>button</button>
    </div>
  );
}

export default App;