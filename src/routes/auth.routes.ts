import { Router } from 'express';
import { signupHandler, loginHandler } from '../controllers/auth.controller';
import { validateBody } from '../middlewares/validate';
import { signupSchema, loginSchema } from '../validators/auth.validators';

const router = Router();

router.post('/signup', validateBody(signupSchema), signupHandler);
router.post('/login', validateBody(loginSchema), loginHandler);

export default router;
