const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const {PORT}=require("./config/serverConfig");

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());

app.get('/ping',(req,res)=>{
    return res.json({
        msg:"pong"
    });
});
app.listen(PORT,()=>{
    console.log(`server is started at ${PORT} `);
})
