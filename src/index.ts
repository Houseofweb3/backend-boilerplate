import http, { IncomingMessage, ServerResponse } from 'http';
import logger from './config/logger';

/**
 * Creates an HTTP server that responds with a JSON message.
 *
 * @param {IncomingMessage} req - The incoming request object.
 * @param {ServerResponse} res - The server response object.
 * @returns {http.Server} The created HTTP server.
 */
export const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
        JSON.stringify({
            data: 'It Works!',
        }),
    );
});

server.listen(3000, () => {
    logger.info('Server running on http://localhost:3000/');
});
