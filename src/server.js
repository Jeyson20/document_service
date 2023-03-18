import express from "express";

export class Server {
  #config = null;
  #express = null;

  constructor(Configuration, router) {
    this.#config = Configuration;
    this.#express = express().use(router);
  }

  start() {
    return new Promise((resolve) => {
      const PORT = this.#config.get("PORT");

      this.#express.listen(PORT, () => {
        console.log(`Application running on port ${PORT}`);
        resolve();
      });
    });
  }
}
