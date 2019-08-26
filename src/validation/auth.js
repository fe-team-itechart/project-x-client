import Joi from 'joi-browser';

const validateAuth = ({ firstName, lastName, email, password }) => {
  let errors = {};

  const firstNameSchema = Joi.object().keys({
    firstName: Joi.string()
      .min(2)
      .max(20)
      .required(),
  });

  const lastNameSchema = Joi.object().keys({
    lastName: Joi.string()
      .required()
      .min(2)
      .max(20),
  });

  const emailSchema = Joi.object().keys({
    email: Joi.string()
      .required()
      .email()
      .max(64),
  });

  const passwordSchema = Joi.object().keys({
    password: Joi.string()
      .required()
      .min(8)
      .max(32),
  });

  const emailValidate =
    email !== undefined ? Joi.validate({ email }, emailSchema) : '';
  const passwordValidate =
    password !== undefined ? Joi.validate({ password }, passwordSchema) : '';
  const firstNameValidate =
    firstName !== undefined ? Joi.validate({ firstName }, firstNameSchema) : '';
  const lastNameValidate =
    lastName !== undefined ? Joi.validate({ lastName }, lastNameSchema) : '';

  if (emailValidate.error) {
    errors.email = emailValidate.error.details[0].message.replace(
      '"email"',
      'Email'
    );
  }

  if (passwordValidate.error) {
    errors.password = passwordValidate.error.details[0].message.replace(
      '"password"',
      'Password'
    );
  }

  if (firstNameValidate.error) {
    errors.firstName = firstNameValidate.error.details[0].message.replace(
      '"firstName"',
      'First name'
    );
  }

  if (lastNameValidate.error) {
    errors.lastName = lastNameValidate.error.details[0].message.replace(
      '"lastName"',
      'Last Name'
    );
  }
  return errors;
};

export default validateAuth;