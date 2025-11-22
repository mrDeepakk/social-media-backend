import { Response, NextFunction } from 'express';
import { AuthRequest } from '../middlewares/auth';
import { followUser, unfollowUser, getFollowers, getFollowing } from '../services/user.service';
import { ApiResponse } from '../utils/ApiResponse';

export const followHandler = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const followerId = req.user!.id;
    const followingId = req.params.id;
    const follow = await followUser(followerId, followingId);
    res.status(201).json(new ApiResponse(true, 'Followed user', follow));
  } catch (err) {
    next(err);
  }
};

export const unfollowHandler = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const followerId = req.user!.id;
    const followingId = req.params.id;
    await unfollowUser(followerId, followingId);
    res.json(new ApiResponse(true, 'Unfollowed user'));
  } catch (err) {
    next(err);
  }
};

export const followersHandler = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.id;
    const followers = await getFollowers(userId);
    res.json(new ApiResponse(true, 'Followers list', followers));
  } catch (err) {
    next(err);
  }
};

export const followingHandler = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.id;
    const following = await getFollowing(userId);
    res.json(new ApiResponse(true, 'Following list', following));
  } catch (err) {
    next(err);
  }
};
