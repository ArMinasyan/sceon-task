export interface ResponseType {
  statusCode: number;
  success: boolean;
  data: any;
  message: string;
  validationError:
    | {
        property: string;
        message: string;
      }
    | {};
}
