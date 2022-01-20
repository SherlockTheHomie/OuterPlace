const { Reaction, Thought } = require('../models');

module.exports = {

    createReaction(req, res) {
      const filter = { _id: req.params.thoughtId };  
      const update = { $addToSet: { reactions: req.body } };
      Thought.findOneAndUpdate(filter, update, { runValidators: true, new: true})
          .then((reaction) => res.json(reaction))
          .catch((err) => res.status(500).json(err));
      },

    deleteReaction(req, res) {
      const filter = { _id: req.params.thoughtId };  
      const update = { $pull: { reactions: req.params.reactionId } };
      Thought.findOneAndUpdate(filter, update, { runValidators: true, new: true})
          .then((reaction) => res.json(reaction))
          .catch((err) => res.status(500).json(err));
      },
}