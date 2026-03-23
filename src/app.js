const express = require("express")
const cookieParser = require("cookie-parser")

// Require all the routes here
const authRouter = require("./routes/auth.routes")

const app = express()  // initiate server(creates an instance of the server)
// use middleware and routes that will be created

app.use(express.json())
app.use(cookieParser())

// Using all the routes here
app.use("/api/auth", authRouter)










module.exports = app