import { container } from "./src/ioc";

const Server = container.resolve("Server");

async function main() {
  try {
    Server.start();
  } catch (ex) {
    console.log(ex);
  }
}

main();
