import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export default function handleValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result: any = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({
      statusCode: 400,
      success: false,
      data: {},
      message: "",
      validationError: {
        property: result.errors[0].param,
        message: result.errors[0].msg,
      },
    });
  }

  return next();
}
