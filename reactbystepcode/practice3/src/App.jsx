import { useForm } from "react-hook-form";




function App(){
  const{register,  handleSubmit}=useForm();

const submitform = (data) =>{
    console.log(data);
}




  return(
    <>
    <form   onSubmit={handleSubmit(submitform)}>
      <div>
        <label htmlFor="first">Name : </label>
        <input id="first" {...register("name")}/>
        <br />
        <label htmlFor="second">Age</label>
        <input id="second" {...register("age")}/>
        <br></br>
        <label htmlFor="third">password</label>
        <input id="third" {...register("password")}></input>
        <br />
        <button type="Submit">Submit</button>
      </div>
    </form>
    
    
    
    </>
  )
}


export default App;