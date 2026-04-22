const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require('cors')

// Require all the routes here
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")

const app = express()  // initiate server(creates an instance of the server)
// use middleware and routes that will be created


app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "localhost:5173",
    credentials: true
}))

// Using all the routes here
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)










module.exports = app