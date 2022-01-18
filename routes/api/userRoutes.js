const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
} = require('../../controllers/userController');

// /api/students
router.route('/').get(getUsers).post(createUser);

// /api/students/:studentId
router.route('/:userId').get(getUserById).delete(deleteUser);

// /api/students/:studentId/assignments

module.exports = router;
