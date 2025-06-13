const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const {PORT}=require("./config/serverConfig");
const apiRouter=require("./routes/index");

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());
app.use('/api',apiRouter);


app.listen(PORT,()=>{
    console.log(`server is started at ${PORT} `);
})
