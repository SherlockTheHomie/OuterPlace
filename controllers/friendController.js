const { User } = require('../models');

module.exports = {
  // Get all students
  addFriend(req, res) {
    User.findOneAndUpdate({_id: req.params.userId})
    .then((user) => 
        !user)
        ? res.status(404).json({ message: 'That isnt a real friend'})
        : User.findOneAndUpdate(
            { friends: req.params.userId },
            { $push: { friends: req.params.userId } },
            )
      .then((user) => res.json(json))
      .catch((err) => res.status(500).json(err))
    ),
},

  // Delete a student and remove them from the course
  deleteFriend(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'Sorry, they arent real' })
          : User.findOneAndUpdate(
              { friends: req.params.userId },
              { $pull: { friends: req.params.userId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'User deleted, but no thoughts found',
            })
          : res.json({ message: 'User successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
}