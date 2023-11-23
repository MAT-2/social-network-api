const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  userCreation,
  deleteUser,
} = require("../../controllers/userController.js");

// /api/user
router.route("/").get(getUsers).post(userCreation);

// /api/user/:userId
router.route("/:userId").get(getSingleUser).delete(deleteUser);

module.exports = router;
