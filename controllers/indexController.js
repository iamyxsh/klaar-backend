const expressAsyncHandler = require("express-async-handler")
const branches = require("../constants/branches")
const pool = require("../database/pgClient")

const autocomplete = expressAsyncHandler(async (req, res) => {
	const { q, limit, offset } = req.query

	const auto_res = await pool
		.query(
			`SELECT * FROM branches WHERE branch ILIKE '${q}%' ORDER BY ifsc ASC LIMIT $1 OFFSET $2`,
			[limit, offset]
		)
		.then((data) => data.rows)

	res.json(auto_res)
})

const match = expressAsyncHandler(async (req, res) => {
	const { q, limit, offset } = req.query

	let like_field = ""

	branches.forEach((b) => {
		if (like_field === "") {
			like_field = ` ${b} ILIKE '%${q}%'`
		} else {
			like_field = `${like_field} OR ${b} ILIKE '%${q}%'`
		}
	})

	const match_res = await pool
		.query(
			`SELECT * FROM branches WHERE ${like_field} ORDER BY ifsc ASC LIMIT $1 OFFSET $2`,
			[limit, offset]
		)
		.then((data) => data.rows)

	res.json(match_res)
})

module.exports = { match, autocomplete }
