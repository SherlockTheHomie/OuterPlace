const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
} = require('../../controllers/thoughtController.js');

// /api/courses
router.route('/').get(getAllThoughts).post(createThought);

router.route('/:userId').post(createThought);

router.route('/thoughtId').get(getThoughtById).put(updateThoughtById);
// /api/students/:userId/thoughts/:assignmentId
router.route('/:thoughtId').delete(deleteThoughtById);

const {
  createReaction,
  deleteReaction,
} = require('../../controllers/reactionController');

// /api/students/:userId/thoughts/:assignmentId
router.route('/:thoughtId/reactions').post(createReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThoughtById)
  .delete(deleteThoughtById);

module.exports = router;
