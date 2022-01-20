const { User } = require('../models');

module.exports = {

  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  
  getUserById(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .lean()
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
              user,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  updateUserById(req, res) {
    User.findByIdAndUpdate( 
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) => 
      !user
      ? res.status(404).json({ message: "User does not exist" })
      : User.findOneAndUpdate(
        { users: req.params.userId },
        { $pull: { users: req.params.userId } },
        { new: true }
      )
      .catch((err) => {
      res.status(500).json({ message: "user has been updated"});
      })
      );
  },

  deleteUserById(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
      !user
      ? res.status(404).json({ message: 'User does not exist' })
      : res.json(user)
    )
      .catch((err) => {
      res.status(500).json(err);
      })
  },
}