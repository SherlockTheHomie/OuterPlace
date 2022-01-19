const router = require('express').Router();
const friendRoutes = require('./friendRoutes');

router.use('/friends/', friendRoutes);

const {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUser,
} = require('../../controllers/userController');

// /api/students
router.route('/').get(getUsers).post(createUser);

// /api/students/:studentId
router.route('/:userId').get(getUserById).delete(deleteUser);

router.route('/:userId').get(getUserById).put(updateUserById);

module.exports = router;
