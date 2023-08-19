import express from "express"
import cors from "cors"


const app = express()

app.use(cors())

app.get("/", (req, res) => {
    res.send("/ - Hello World")
})

app.get("/api", (req, res) => {
    res.send("/api - Hello World")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})