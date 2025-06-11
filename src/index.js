const express = require("express")
const app = express()

const PORT = 3000

app.get("/", (req,res) => {
    console.log("🚀 Hello from DevOps Zero to Hero")
    res.send("🚀 Hello from DevOps Zero to Hero")
})

app.listen(PORT , ()=>{
    console.log(`App running on port ${PORT}`)
})