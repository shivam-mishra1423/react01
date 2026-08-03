import { useContext } from "react"
import { UserContext } from "./UserContex"



function Home(){
const name= useContext(UserContext);


    return(

        <>
        
        <h1>{name}</h1>
        </>
    )
}


export default Home;