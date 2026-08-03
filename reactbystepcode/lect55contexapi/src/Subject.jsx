
import { useContext } from "react";
import Student from "./Student";
import {SubjectContext} from  "./ContextData"

function Subject(){
    const subject =useContext(SubjectContext);
  return (
    <div  style={{ backgroundColor: "green", padding: 10 }}>
      <h1>Subject:{subject} </h1>
    </div>
  )
}


export default  Subject;