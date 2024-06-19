import { Router } from 'express';
const router = Router();

router.get('/', function(req, res, next) {
  res.json({ message: 'respond with a resource' });
});

export default router;
