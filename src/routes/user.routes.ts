import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth';
import {
  followHandler,
  unfollowHandler,
  followersHandler,
  followingHandler
} from '../controllers/user.controller';

const router = Router();

router.post('/:id/follow', authMiddleware, followHandler);
router.post('/:id/unfollow', authMiddleware, unfollowHandler);
router.get('/:id/followers', authMiddleware, followersHandler);
router.get('/:id/following', authMiddleware, followingHandler);

export default router;
