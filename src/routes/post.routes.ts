import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth';
import { createPostHandler, getMyPostsHandler, getUserPostsHandler } from '../controllers/post.controller';
import { validateBody } from '../middlewares/validate';
import { createPostSchema } from '../validators/post.validators';
import { upload } from '../utils/multer';

const router = Router();

router.post(
  '/',
  authMiddleware,
  upload.single('media'),
  validateBody(createPostSchema),
  createPostHandler
);

router.get('/me', authMiddleware, getMyPostsHandler);
router.get('/user/:id', authMiddleware, getUserPostsHandler);

export default router;
