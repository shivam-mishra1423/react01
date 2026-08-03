const express=require("express");
const app=express();


function cheackroute(req,resp,next){
    console.log("user is accessing"+req.url+ "page");
    next();
}




app.use(cheackroute);

app.get('/', (req,resp)=>{
    resp.send("home page");
})


app.get('/user', (req,resp)=>{
    resp.send("this is user pages");
})


app.get("/products", (req,resp)=>{
    resp.send("product pages");
})


app.listen(3000);