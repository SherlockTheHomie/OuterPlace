const router = require('express').Router();

const {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} = require('../../controllers/userController');


router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getUserById).delete(deleteUserById);
router.route('/:userId').get(getUserById).put(updateUserById);

const {
  addFriend,
  deleteFriend,
} = require('../../controllers/friendController');

router.route('/:friendId').put(addFriend);
router.route('/userId/friends/:friendId').delete(deleteFriend);

module.exports = router;
