// Import json with list of users
const users = require('../data/user.json');

// Create controller for GET request to '/users/all'
exports.usersGetAll = async (req, res) => {
  // res.send('There will be dragons, not posts.')
    res.json(users)
}