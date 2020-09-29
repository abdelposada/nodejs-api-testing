const mongoose = require('mongoose');
const User = require('../user.model');
const config = require('../../config/config');

describe('should test user service', () => {
  beforeAll(async () => {
    await mongoose.connect(config.mongo.url, config.mongo.options);
    await User.deleteMany({});
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });
  it('has a module', () => {
    expect(User).toBeDefined();
  });
  describe('get users', () => {
    it('should get an array of users', async () => {
      const users = await User.find({});
      expect(Array.isArray(users)).toBe(true);
    });
  });
});
