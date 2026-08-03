import { useEffect, useState } from "react";

function App() {
  const [Userdata, SetUserdata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getuserdata();
  }, []);

  const getuserdata = async () => {
    const url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();

    console.log(response);

    SetUserdata(response);
    setLoading(false);
  };

  return (
    <>
      <p>API</p>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        Userdata.map((users) => (
          <ul key={users.id}>
            <li>{users.name}</li>
            <li>{users.age}</li>
            <li>{users.email}</li>
          </ul>
        ))
      )}
    </>
  );
}

export default App;