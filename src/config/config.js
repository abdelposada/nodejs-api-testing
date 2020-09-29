const path = require('path');
const dotenv = require('dotenv');
const Joi = require('@hapi/joi');

dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

const environmentSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().required().description('Mongo DB url'),
    JWT_SECRET: Joi.string().required().description('JWT secret key'),
  })
  .unknown();

const { value: envVars, error } = environmentSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mongo: {
    url: envVars.MONGODB_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      keepAlive: true,
    },
  },
  jwt: {
    secret: envVars.JWT_SECRET,
  },
};
