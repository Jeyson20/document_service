import { HTTP_STATUS_CODE } from "../enums";

export const ErrorMiddleware = (err, req, res, next) => {
  const status = err.statusCode || HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR;
  let message = err.message || "Internar Server Error";

  if (err.message instanceof Object) {
    message = message.message || err.message;
  }

  return res.status(status).send({
    status,
    message,
  });
};
