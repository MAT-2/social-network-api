const { Schema, Types } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: () => Promise.resolve(false),
        message: "Email validation failed",
      },
    },
    thoughts: [
      //TODO: Array of _id values referencing the Thought model
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      //TODO: Array of _id values referencing the User model (self-reference)
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  //Enabling virtuals
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//Creating virtual property called 'friendCount' to take total of friends.
userSchema.virtual("friendCount").get(function () {
  return `${this.friends.length}`;
});

const User = model("user", userSchema);
module.exports = User;
