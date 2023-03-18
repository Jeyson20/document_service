import { Router } from "express";

export function DocumentRoutes(DocumentController) {

    const router = Router();

    router.get("/ping", DocumentController.ping);
    router.post("/uploadFiles", DocumentController.uploadFiles);

    return router;
}