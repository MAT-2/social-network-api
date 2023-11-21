const { Schema, Types } = require("mongoose");

const userSchema = new Schema({
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
  thoughts: {
    //TODO: Insert here for later once Thoughts Model is created
  },
  friends: {
    //TODO: Will add later
  },
});

user.email = "test@test.co";
user.name = "test";

let error;
try {
  await user.validate();
} catch (err) {
  error = err;
}
assert.ok(error);
assert.equal(error.errors["name"].message, "Oops!");
assert.equal(error.errors["email"].message, "Email validation failed");

const User = model("user", userSchema);
module.exports = User;
