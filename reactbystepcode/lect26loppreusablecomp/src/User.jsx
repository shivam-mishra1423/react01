const User = ({user1}) =>{
    return  (
        <div>
            
            <h1 ><span style ={{color : 'red', border: '2px dotted'}}>{user1.Name}</span></h1>
            <h1>{user1.Age}</h1>
            <h1>{user1.Roll}</h1>
            <br></br>
        </div>
    )
}

export default  User;