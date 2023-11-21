const { connect, connection } = require("mongoose");

const connectionString =
  process.env.MONGODB_URI ||
  "mongodb+srv://root:admin123@cluster0.l7purnz.mongodb.net/";

connect(connectionString);

module.exports = connection;
