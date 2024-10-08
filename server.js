const express=require("express")
const app=express()
const authmiddleware=(req,res,next)=>{
    const date=new Date()
    const day=date.getDay()
    const hour=date.getHours()
    if (hour<=20
         && hour >=9 && day>=1 && day<=5 ){
        next()
    }
    else {
        res.send("shop is closed")
    }
}
app.use(authmiddleware)
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/static/index.html")
})
app.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/static/home.html")
})
app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+"/static/contact.html")
})
app.get("/about",(req,res)=>{
    res.sendFile(__dirname+"/static/about.html")
})
app.get("/about.css",(req,res)=>{
    res.sendFile(__dirname+"/static/about.css")
})
app.get("/home.css",(req,res)=>{
    res.sendFile(__dirname+"/static/home.css")
})
app.get("/contact.css",(req,res)=>{
    res.sendFile(__dirname+"/static/contact.css")
})
app.get("/style.css",(req,res)=>{
    res.sendFile(__dirname+"/static/style.css")
})


port=5000
app.listen(port,(err)=>err ? console.log(err) : console.log("my server is running on port : "+port))