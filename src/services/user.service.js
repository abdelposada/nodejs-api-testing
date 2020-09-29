function UserService(UserModel) {
  async function getAll() {
    const users = await UserModel.find({});
    return users;
  }

  return {
    getAll,
  };
}

module.exports = UserService;
