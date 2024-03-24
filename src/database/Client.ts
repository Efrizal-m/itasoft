import { vars } from "../global_config/vars";
const { Client } = require('pg')

const client = new Client({
	user: vars.dbUserName,
	host: vars.dbHost,
	database: vars.dbName,
	password: vars.dbPassword,
	port: vars.dbPort
})

module.exports = {
    client
}