import { useState } from "react";
import Form from "Form";

function App(){
  const[name,setName] = useState('');
  const[age,setAge] = useState();
  const[password,Setpassword] = useState();

  const handleSubmit = (e)=>{
    e.preventDefault();
      console.log(name);
      console.log(age);
      console.log(password);
  }


  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter name" value = {name} onChange={(e)=>setName(e.target.value)} />
        <br />
        <input type="age"placeholder="enter age" value = {age} onChange={(e)=>setAge(e.target.value)} />
        <br />
        <input type="password" placeholder="enter pass" value = {password} onChange={(e)=>Setpassword(e.target.value)} />
        <br />
        <button>Submit</button>
 <Form/>
      </form>
    </div>
   
  )

}

export default App;