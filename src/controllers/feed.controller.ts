import { Response, NextFunction } from 'express';
import { AuthRequest } from '../middlewares/auth';
import { getFeed } from '../services/feed.service';
import { ApiResponse } from '../utils/ApiResponse';

export const feedHandler = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const page = parseInt((req.query.page as string) || '1', 10);
    const limit = parseInt((req.query.limit as string) || '10', 10);

    const feed = await getFeed(req.user!.id, page, limit);
    res.json(new ApiResponse(true, 'Feed', feed));
  } catch (err) {
    next(err);
  }
};
