const express= require('express');
import home from '../formrender/home.js';


const app=express();

app.get("/",(req,resp)=>{
    resp.send(home());
})

app.get("/login", (req, resp) => {
    resp.send(`
        <form action="/submit" method="post">
            <input type="text" name="name" placeholder="Enter Name"/><br><br>
            <input type="password" name="password" placeholder="Enter Password"/><br><br>
            <button>Login</button>
        </form>
    `);
});


app.post("/submit", (req,res)=>{
    res.send("<h1>form submited</h1>")
})

app.get("/about", (res,resp)=>{
    res.send("<h1>this is aboutpage</h1>")
})


app.listen(3000);