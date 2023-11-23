const { connect, connection } = require("mongoose");
require("dotenv").config();

// console.log(process.env);
const connectionString = process.env.MONGODB_URI || process.env.DB_NAME;

connect(connectionString);

module.exports = connection;
