import { body } from "express-validator";
import validationMessages from "../validation.messages";

const userValidator = [
  body("email").isEmail().withMessage(validationMessages.email),
  body("first_name")
    .trim()
    .not()
    .isEmpty()
    .withMessage(validationMessages.required),
  body("last_name")
    .trim()
    .not()
    .isEmpty()
    .withMessage(validationMessages.required),
  body("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage(validationMessages.required),
];

const userValidatorOptional = [
  body("first_name")
    .optional(true)
    .trim()
    .not()
    .isEmpty()
    .withMessage(validationMessages.required),
  body("last_name")
    .optional(true)
    .trim()
    .not()
    .isEmpty()
    .withMessage(validationMessages.required),
  body("password")
    .optional(true)
    .trim()
    .not()
    .isEmpty()
    .withMessage(validationMessages.required),
];

export { userValidator, userValidatorOptional };
