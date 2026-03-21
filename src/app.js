const express = require("express")

// Require all the routes here
const authRouter = require("./routes/auth.routes")

const app = express()  // initiate server(creates an instance of the server)
// use middleware and routes that will be created

app.use(express.json())

// Using all the routes here
app.use("/api/auth", authRouter)










module.exports = app