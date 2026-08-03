import User from "./User"

function App(){
const username =[
  {
    Name : "shivam",
     Roll: "227012",
      Age : 29
  },
  {
    Name : "rohit",
     Roll: "227012",
      Age : 29
  },
  {
    Name : "mohit",
     Roll: "227012",
      Age : 29
  }
]

  return(
    <div>
      {username.map((user) => (
       
  <User user1={user}/>
))}
    </div>
  )
}

export default App;