const express=require("express");
const path=require("path");
const app=express();

var staticFolder=express.static(path.join(__dirname,"public"));
app.use(staticFolder);

app.get("/",(req,res)=>{
  res.sendFile(path.join(_dirname+"/index.html"))
})
app.listen(6000,()=>{
    console.log("Server is listining on port 6000");
})