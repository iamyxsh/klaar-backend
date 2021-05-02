require("dotenv").config()

const PG_USER = process.env.pg_user
const PG_PASSWORD = process.env.pg_password
const PG_DATABASE = process.env.pg_databse
const PG_HOST = process.env.pg_host
const PG_PORT = process.env.pg_port
const PORT = process.env.port

module.exports = {
	PG_USER,
	PG_PASSWORD,
	PG_DATABASE,
	PG_HOST,
	PG_PORT,
	PORT,
}
