import { ResponseType } from "../types/response.type";

export class ResponseBuilder {
  private response: ResponseType = {
    statusCode: 200,
    success: true,
    data: {},
    message: "",
    validationError: {},
  };

  constructor() {}

  setStatus(statusCode: number) {
    this.response.statusCode = statusCode;
    return this;
  }

  setSuccess(success: boolean) {
    this.response.success = success;
    return this;
  }

  setData(data: any) {
    this.response.data = data;
    return this;
  }

  setMessage(message: string) {
    this.response.message = message;
    return this;
  }

  setValidationError(validationError: any) {
    this.response.validationError = validationError;
    return this;
  }

  generate() {
    const res = this.response;
    this.response = {
      statusCode: 200,
      success: true,
      data: {},
      message: "",
      validationError: {},
    };

    return res;
  }
}
