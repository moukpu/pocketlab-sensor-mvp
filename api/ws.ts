import { createServer } from "node:http";
import { attachRelay } from "../server/relay";

// Vercel routes this Node function at /api/ws. Keep relay state in this
// function instance; no external database or paid service is required.
const server = createServer((_request, response) => {
  response.writeHead(426, { "content-type": "text/plain; charset=utf-8" });
  response.end("WebSocket upgrade required");
});
attachRelay(server, "/api/ws");

export default server;
