import { createServer } from "node:http";

const requestHandler = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hallo World!",
    })
  );
};

export const httpServer = createServer(requestHandler);
