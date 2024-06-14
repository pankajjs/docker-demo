import express from "express"

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    return res.send("Hello World");
})
app.get("/hello", (req, res)=>{
    return res.send("World")
})

app.listen("3000", ()=>{
    console.log("Server is up on port 3000")
})