const { Schema, model } = require("mongoose");

//Creating a reactionSchema to be used and nested within the thoughtSchema.
const reactionSchema = new schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    max_length: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // Will come back to this timestamp later.
    get: function (timestamp) {
      return timestamp;
    },
  },
});

const thoughtSchema = new schema(
  {
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

    //TODO: NEED TO CREATE AN ARRAY OF NESTED DOCUMENTS using reactionSchema that will be created.
    reactions: [reactionSchema],
  },
  //Enabling virtuals
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//Similar to the User.js Model, we want to take the length of the reactions (total)
reactionSchema.virtual("reactionCount").get(function () {
  return `${this.reactions.length}`;
});

const User = model("thought", thoughtSchema);
module.exports = Thought;
