import Joi from 'joi-browser';

export const userNameSchema = Joi.string()
  .min(2)
  .max(20)
  .required();

const emailSchema = Joi.string()
  .required()
  .email()
  .max(64);

const passwordSchema = Joi.string()
  .required()
  .regex(
    /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/
  )
  .min(8)
  .max(32);

const passwordConfirmSchema = Joi.object().keys({
  password: Joi.string()
    .required()
    .regex(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/
    )
    .min(8)
    .max(32),
  confirmPassword: Joi.any()
    .valid(Joi.ref('password'))
    .required()
    .options({ language: { any: { allowOnly: '!!Passwords do not match' } } }),
});

export const loginValidate = (email, password) => {
  let errors = {};

  const emailValidate = Joi.validate(email, emailSchema);
  const passwordValidate = Joi.validate(password, passwordSchema);

  if (emailValidate.error) {
    errors.email = emailValidate.error.details[0].message.replace(
      '"value"',
      'Email'
    );
  }

  if (passwordValidate.error) {
    errors.password = passwordValidate.error.details[0].message.replace(
      '"value"',
      'Password'
    );

    if (
      errors.password.includes(
        '(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}'
      )
    ) {
      errors.password =
        'Password must contain at least one uppercase letter and one special symbol';
    }
  }

  return errors;
};

export const registerValidate = (
  userName,
  email,
  password,
  confirmPassword
) => {
  let errors = {};

  const userNameValidate = Joi.validate(userName, userNameSchema);
  const emailValidate = Joi.validate(email, emailSchema);
  const passwordValidate = Joi.validate(
    { password, confirmPassword },
    passwordConfirmSchema
  );

  if (emailValidate.error) {
    errors.email = emailValidate.error.details[0].message.replace(
      '"value"',
      'Email'
    );
  }

  if (passwordValidate.error) {
    errors.password = passwordValidate.error.details[0].message.replace(
      '"password"',
      'Password'
    );
    if (
      errors.password.includes(
        '(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}'
      )
    ) {
      errors.password =
        'Password must contain at least one uppercase letter and one special symbol';
    }
  }

  if (userNameValidate.error) {
    errors.userName = userNameValidate.error.details[0].message.replace(
      '"value"',
      'First name'
    );
  }

  return errors;
};

export const changePasswordValidate = (password, confirmPassword) => {
  let errors = {};

  const passwordValidate = Joi.validate(
    { password, confirmPassword },
    passwordConfirmSchema
  );

  if (passwordValidate.error) {
    errors.password = passwordValidate.error.details[0].message.replace(
      '"password"',
      'Password'
    );
    if (
      errors.password.includes(
        '(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}'
      )
    ) {
      errors.password =
        'Password must contain at least one uppercase letter and one special symbol';
    }
  }

  return errors;
};

export const emailValidate = email => {
  let errors = {};
  const emailValidate = Joi.validate(email, emailSchema);

  if (emailValidate.error) {
    errors.email = emailValidate.error.details[0].message.replace(
      '"email"',
      'Email'
    );
  }
  return errors;
};
