import Student from "./Student";


function ClassComponent(){
  return (
    <div  style={{ backgroundColor: "blue", padding: 10 }}>
      <h1>Class component </h1>
      <Student />
    </div>
  )
}


export default ClassComponent;