const { Reaction } = require('../models');

module.exports = {

    createReaction(req, res) {
        Reaction.create(req.body)
          .then((reaction) => res.json(reaction))
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },

    deleteReaction(req, res) {
        Reaction.create(req.body)
          .then((reaction) => res.json(reaction))
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },
}