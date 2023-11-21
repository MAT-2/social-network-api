const { Schema, model } = require("mongoose");

const thoughtSchema = new schema({
  username: {
    type: String,
    required: true,
    max_length: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: {
    //TODO: NEED TO CREATE AN ARRAY OF NESTED DOCUMENTS.
  },
});

const User = model("thought", thoughtSchema);
module.exports = Thought;
