import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth';
import { feedHandler } from '../controllers/feed.controller';

const router = Router();

router.get('/', authMiddleware, feedHandler);

export default router;
