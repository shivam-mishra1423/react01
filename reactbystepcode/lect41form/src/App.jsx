

function App(){

const handleForm = (event) =>{
  event.preventDefault();
  const user = document.querySelector("#user").value;
  const password=document.querySelector("#password").value;
  alert(user);
  alert(password)
}





  return(
    <div>
      <form action=""  method= " " onSubmit={handleForm}>
        <input type="text"  id="user" placeholder= "enter name " />
        <br></br>

        <input type="text"  id="password"  placeholder="enter password" />
<br />
        <button>
          Submit
        </button>

      </form>

    </div>
  )
}


export default App;