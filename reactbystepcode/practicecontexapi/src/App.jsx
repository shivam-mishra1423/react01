import { UserContext } from "./UserContex";
import Home from "./Home";




function App(){
  return(
    <>
  
      <UserContext.Provider value ="shivam">
        <Home/>
      </UserContext.Provider>
    
    
    </>
  )
}


export default App;