import Joi from 'joi-browser';

import { userNameSchema } from './auth';

const descriptionSchema = Joi.string().max(255);

const socialSchema = Joi.string()
  .uri()
  .allow('')
  .optional();

export const publicProfileValidate = profile => {
  let errors = {};
  const {
    userName,
    description,
    twitterLink,
    facebookLink,
    linkedInLink,
  } = profile;

  const userNameValidate = Joi.validate(userName, userNameSchema);
  const descriptionValidate = Joi.validate(description, descriptionSchema);
  const twitterLinkValidate = Joi.validate(twitterLink, socialSchema);
  const facebookLinkValidate = Joi.validate(facebookLink, socialSchema);
  const linkedInLinkValidate = Joi.validate(linkedInLink, socialSchema);

  if (userNameValidate.error) {
    errors.firstName = userNameValidate.error.details[0].message.replace(
      '"value"',
      'Username'
    );
  }

  if (descriptionValidate.error) {
    errors.description = descriptionValidate.error.details[0].message.replace(
      '"value"',
      'Description'
    );
  }

  if (twitterLinkValidate.error) {
    errors.twitterLink = twitterLinkValidate.error.details[0].message.replace(
      '"value"',
      'Twitter link'
    );
  }

  if (facebookLinkValidate.error) {
    errors.facebookLink = facebookLinkValidate.error.details[0].message.replace(
      '"value"',
      'Facebook link'
    );
  }

  if (linkedInLinkValidate.error) {
    errors.linkedInLink = linkedInLinkValidate.error.details[0].message.replace(
      '"value"',
      'Linkedin link'
    );
  }

  return errors;
};
