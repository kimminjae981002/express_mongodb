const User = require("../models/users.model");

function getUsers(req, res) {
  res.json(User);
}

function getUser(req, res) {
  const userId = Number(req.params.userId);
  const user = User[userId];
  res.send(user);
}

function postUser(req, res) {
  const newUser = {
    id: User.length,
    name: req.body.name,
  };
  User.push(newUser);
  res.json(newUser);
}

module.exports = {
  getUser,
  getUsers,
  postUser,
};
