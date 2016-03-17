module.exports = {
  "get": {
    "/users": require("./controllers/usersController").getUsers
  },
  "post": {
    "/users": require("./controllers/usersController").addUser
  }
};
