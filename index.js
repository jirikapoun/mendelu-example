import { openDatabase } from "./database.js";
import { startServer } from "./server.js";

await openDatabase();
await startServer(3000);

console.log("Server is running on port 3000");
