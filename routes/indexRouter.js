const express = require("express")
const { autocomplete, match } = require("../controllers/indexController")

const indexRouter = express.Router()

indexRouter.use("", match)
indexRouter.get("/autocomplete", autocomplete)

module.exports = indexRouter
