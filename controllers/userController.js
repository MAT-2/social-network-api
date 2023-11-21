const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

//Exporting data from User model to get all users.
module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      const userObj = {
        users,
      };
      res.json(userObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  //Exporting data to get a single user.
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({
        _id: req.params.userId,
      }).select("-__v"); //that gives version number of document whenever something is updated and increments it.

      if (!user) {
        return res
          .status(404)
          .json({ message: "No user with that ID. Try again!" });
      }
      res.json({
        user,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  //Creating a new user, using User Model as reference.
  async userCreation(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
