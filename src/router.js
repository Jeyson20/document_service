import compression from "compression";
import cors from "cors";
import { json, Router as ExpressRouter, urlencoded } from "express";
import helmet from "helmet";
import { NotFoundMiddleware } from "./common/middlewares";
import { ErrorMiddleware } from "./common/middlewares/error.middleware";

export function Router(DocumentRoutes) {
  const router = ExpressRouter();
  const apiRoute = ExpressRouter();

  apiRoute
    .use(cors())
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(compression())
    .use(helmet());

  apiRoute.use("/documents/",DocumentRoutes);

  router.use("/api", apiRoute);

  router.use(ErrorMiddleware);
  router.use(NotFoundMiddleware)

  return router;
}
