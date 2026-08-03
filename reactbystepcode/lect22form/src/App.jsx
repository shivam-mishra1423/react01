import { useState } from "react";

function App()
{

  const[name,setName]=useState('');
  const[password, setPassword]=useState();
  const[email, setEmail] = useState();





  return(
    <div>
      <h1>Controlled Component</h1>
      <form action="">
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter your name"></input>
        <br />
        <input type="password" value={password} onChange={(event)=>setPasswort(event.target.value)}  placeholder="enter rollno"></input> 
        <br />
        <input type="text" value ={email} onChange={(event)=>setEmail(event.target.value)}  placeholder="enter email"></input>
        <br/>
        <button>Submit</button>
    <br></br>
        <button onClick={()=>setName('')}>clear name</button><br></br>
        <button onClick={()=>setPassword('')}>clear pasword</button><br></br>
        <button onClick={()=>setEmail('')}>clear email</button><br></br>
             </form>

             <h1>{name}</h1>
             <h2>{password}</h2>
             <h3>{email}</h3>
    </div>
  );
}

export default App;