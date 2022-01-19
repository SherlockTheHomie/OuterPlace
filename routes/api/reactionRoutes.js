const router = require('express').Router();

const {
  createReaction,
  deleteReaction,
} = require('../../controllers/reactionController');

// /api/students/:userId/thoughts/:assignmentId
router.route('/:thoughtid/reactions').post(createReaction);

router.route('/thoughtid/reactions').delete(deleteReaction);


module.exports = router;