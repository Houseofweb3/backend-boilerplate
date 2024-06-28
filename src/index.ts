import http, { IncomingMessage, ServerResponse } from "http";
import logger from './logger';

export const server = http.createServer(
  (req, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "It Works!",
      }),
    );
  },
);

server.listen(3000, () => {
  logger.info("Server running on http://localhost:3000/");
});
