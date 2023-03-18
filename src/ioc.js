import { createContainer, asClass, asFunction, InjectionMode } from "awilix";

import { Router } from "./router";
import { Configuration} from "./config";
import { Server } from "./server";
import {
  DocumentController,
  DocumentRoutes,
  DocumentService,
} from "./modules/document";

export const container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
})
  .register({
    Configuration: asClass(Configuration),
    Server: asClass(Server),
    DocumentService: asClass(DocumentService),
    DocumentController: asClass(DocumentController),
  })
  .register({
    router: asFunction(Router).singleton(),
    DocumentRoutes: asFunction(DocumentRoutes).singleton(),
  });
