import User from "./User";

function App(){


  const userA={
    name : "shivam",
    roll : "227012"
  }

  const userB={
    name : "munnu",
    roll : "227015"
  }
  return (
    <div>
      <h1>Props in reacts</h1>
      <User  user1 = {userA}/>
      <User  user1 = {userB}/>
    </div>
  )
}

export default App;