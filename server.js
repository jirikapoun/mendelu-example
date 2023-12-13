import { createServer } from "node:http";
import { promisify } from "node:util";
import { AccessLog } from "./database.js";

async function requestHandler(request, response) {
  // Log the current access
  const currentAccessLog = new AccessLog({
    time: new Date(),
    ip: request.socket.remoteAddress,
  });
  await currentAccessLog.save();

  // Retrieve all accesses
  const allAccessLogs = await AccessLog.find();

  // Send JSON response
  response.writeHead(200, {
    "Content-Type": "application/json",
  });
  response.end(
    JSON.stringify(
      {
        message: "Hallo World!",
        logs: allAccessLogs,
      },
      null,
      2
    )
  );
}

export const httpServer = createServer(requestHandler);

export const startServer = promisify(httpServer.listen.bind(httpServer));
