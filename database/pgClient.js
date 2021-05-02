const {
	PG_DATABASE,
	PG_HOST,
	PG_PASSWORD,
	PG_PORT,
	PG_USER,
} = require("../constants/env")

const pg = require("pg")
require("dotenv").config()

const pool = new pg.Pool({
	user: PG_USER,
	password: PG_PASSWORD,
	database: PG_DATABASE,
	host: PG_HOST,
	port: PG_PORT,
})

module.exports = pool
