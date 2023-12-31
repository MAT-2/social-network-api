const { Thought, User } = require("../models");

module.exports = {
  //Setting up Get request for all thoughts!
  async getThoughts(req, res) {
    try {
      const thought = await Thought.find();
      res.json(err);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Getting a single thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({
        _id: req.params.thoughtId,
      }).select("__V");

      if (!thought) {
        return res
          .status(404)
          .json({ message: "There is no thought associated with that ID." });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Creating a new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      //Here, we are correlating and updating the thought with the id of user, and pushing the thought.
      User.findOneAndUpdate(
        { _id: req.body._id },
        { $push: { thoughts: thought._id } }
      );

      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  //Deleting a thougt
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        res.status(404).json({ message: "There is no thought with that ID" });
      }
      await Thought.deleteMany({ _id: { $in: thought.students } });
      res.json({ message: "The User and their Thought was deleted!" });
    } catch (err) {}
  },
  //Updating a thought!
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: "There is no thought with this ID!" });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
