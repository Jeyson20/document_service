import { ENVIRONMENT } from "../common/enums";

export class Configuration {
  constructor() {
    if (process.env.NODE_ENV !== ENVIRONMENT.PRODUCTION) {
      require("dotenv").config();
    }
  }

  get(key) {
    return process.env[key];
  }
}