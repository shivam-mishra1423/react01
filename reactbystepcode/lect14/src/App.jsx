function App(){

  function callFan(){
    alert("function is calling");
  }
function n(){
  alert("shivam");
}

const name=()=>{
  alert("i am arrow function")
}

const furut=(x)=>{
  alert(x);
}

const fname =(m) =>{
    alert(m)
};
  return(
    <div>
<br></br>
      <button onClick={()=>furut("apple")}>Apple</button><br></br>
      <buttoon onClick={()=>fname("shivam")}>name1</buttoon>
      <br></br>

      //onclick me hm function ka defination ko hm pass karte na ki function ko call 
    <button onClick={name}>name</button>

      <button onClick={n}>button</button>
      <button onClick={callFan}>Click</button>
    </div>
  );
}

export default App;