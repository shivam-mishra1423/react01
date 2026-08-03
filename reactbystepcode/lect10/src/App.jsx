function App(){

  const name="shivam";
  const age=25;
  return (
    <>

    <button onClick={() => alert(age)}>
    Click
</button>

    <button onClick={()=> alert(name)}>shivam button</button>
    </>
  )
}

export default App;