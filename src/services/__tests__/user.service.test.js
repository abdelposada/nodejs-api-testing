const sinon = require('sinon');
const UserService = require('../user.service');

describe('should test user service', () => {
  it('has a module', () => {
    expect(UserService).toBeDefined();
  });
  describe('get users', () => {
    it('should get an array of users', async () => {
      const UserModel = {
        find: sinon.spy(),
      };
      const userService = UserService(UserModel);
      await userService.getAll();
      const called = UserModel.find.calledOnce;
      expect(called).toEqual(true);
    });
  });
});
