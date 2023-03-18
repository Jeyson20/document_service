import { HTTP_STATUS_CODE } from "../enums";

export function NotFoundMiddleware(req, res, next) {
  return res.status(HTTP_STATUS_CODE.NOT_FOUND).send({
    status: HTTP_STATUS_CODE.NOT_FOUND,
    message: "Recurso no encontrado 🔦",
  });
}
