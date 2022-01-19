const router = require('express').Router();

const {
  addFriend,
  deleteFriend,
} = require('../../controllers/friendController');

// /api/students
router.route('/:friendId').put(addFriend);

// /api/students/:studentId
router.route('/:friendId').delete(deleteFriend);

router.route('/').get(getUsers).put(updateUserById);
// /api/students/:studentId/assignments

module.exports = router;