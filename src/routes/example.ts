import { Router, Request, Response } from 'express';

const router = Router();

/**
 * @swagger
 * /example:
 *   get:
 *     summary: Example endpoint
 *     description: This is an example endpoint
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get('/example', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Example endpoint' });
});

export default router;
