const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

// const errorController = require("./controllers/errorController")
const pool = require("./database/pgClient")
const { PORT } = require("./constants/env")
const indexRouter = require("./routes/indexRouter")
// const indexRouter = require("./routes")

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use("/api/branch", indexRouter)

// app.use(errorController)

const port = PORT || 5000

app.listen(port, () => console.log(`Server running on port ${PORT}.`))
