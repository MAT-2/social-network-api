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
};
