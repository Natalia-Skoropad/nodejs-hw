import { Joi, Segments } from 'celebrate';

//=====================================================================

const EMAIL = Joi.string().email().required();
const PASSWORD = Joi.string().min(8).required();
const TOKEN = Joi.string().required();

//=====================================================================

export const registerUserSchema = {
  [Segments.BODY]: Joi.object({
    email: EMAIL,
    password: PASSWORD,
  }),
};

//=====================================================================

export const loginUserSchema = {
  [Segments.BODY]: Joi.object({
    email: EMAIL,
    password: PASSWORD,
  }),
};

//=====================================================================

export const requestResetEmailSchema = {
  [Segments.BODY]: Joi.object({
    email: EMAIL,
  }),
};

//=====================================================================

export const resetPasswordSchema = {
  [Segments.BODY]: Joi.object({
    password: PASSWORD,
    token: TOKEN,
  }),
};
