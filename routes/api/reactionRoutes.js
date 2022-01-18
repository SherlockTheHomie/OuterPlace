const router = require('express').Router();

const {
  createReaction,
  deleteReaction,
} = require('../../controllers/reactionController');

// /api/students/:userId/thoughts/:assignmentId
router.route('/reactions').post(createReaction);

router.route('/reactions').delete(deleteReaction)


module.exports = router;