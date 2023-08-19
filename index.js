import express from "express"
import cors from "cors"
const port = process.env.PORT || 3000


const app = express()

app.use(cors())

app.get("/", (req, res) => {
    res.send("/ - Hello World")
})

app.get("/api", (req, res) => {
    res.send("/api - Hello World")
})

export { app }

app.listen(port, () => {
    console.log("Server is running on port 3000")
})