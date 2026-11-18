const express = require("express")


const app = express()


app.use((req, res)=>{
   res.send("heloooo node js")
})



app.listen(3000, ()=>{
      console.log("server succesfully created")
})