import { useDebugValue } from "react";

function App(){
  const name1=
  [
    {
      id : 1,
      name: "shivam",
      roll : "227012",
      age : 25
    },

      {
        id : 2,
        name : "mohan",
        roll : "227024",
        age : 29
      }
  ]

  return(
    <div>
      <table border="1">
        <thead>
        <tr>
          <td>name</td>
          <td>roll</td>
          <td>age</td>
        </tr>
        </thead>

        <tbody>
          {name1.map((user)=>(
          <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.roll}</td>
          <td>{user.age}</td>
        </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}

export default App;