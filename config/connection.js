const { connect, connection } = require("mongoose");

const connectionString = process.env.MONGODB_URI || process.env.DB_NAME;

connect(connectionString);

module.exports = connection;
