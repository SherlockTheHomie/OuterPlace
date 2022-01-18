const router = require('express').Router();
const reactionRoutes = require('./reactionRoutes');

router.use('/thoughts/:thoughtid/reactions', reactionRoutes);

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
} = require('../../controllers/thoughtController.js');

// /api/courses
router.route('/').get(getAllThoughts).post(createThought);

router.route('/:userId/thoughts').post(createThought);

// /api/students/:userId/thoughts/:assignmentId
router.route('/:userId/thoughts/:thoughtId').delete(deleteThoughtById);


// /api/courses/:courseId
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThoughtById)
  .delete(deleteThoughtById);

module.exports = router;
