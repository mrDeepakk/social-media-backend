import { Response, NextFunction } from 'express';
import { AuthRequest } from '../middlewares/auth';
import { createPost, getMyPosts, getUserPosts } from '../services/post.service';
import { ApiResponse } from '../utils/ApiResponse';
import cloudinary from '../config/cloudinary';

export const createPostHandler = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user!.id;
    const { text } = req.body;
    let mediaUrl: string | undefined;

    if (req.file) {
      const result = await cloudinary.uploader.upload_stream(
        { folder: 'social_media_posts' },
        (error, result) => {
          if (error || !result) throw error;
        }
      );
      // Simpler: use upload with buffer:
      const uploadResult = await cloudinary.uploader.upload(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`,
        { folder: 'social_media_posts' }
      );
      mediaUrl = uploadResult.secure_url;
    }

    const post = await createPost(userId, text, mediaUrl);
    res.status(201).json(new ApiResponse(true, 'Post created', post));
  } catch (err) {
    next(err);
  }
};

export const getMyPostsHandler = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const posts = await getMyPosts(req.user!.id);
    res.json(new ApiResponse(true, 'My posts', posts));
  } catch (err) {
    next(err);
  }
};

export const getUserPostsHandler = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const posts = await getUserPosts(req.params.id);
    res.json(new ApiResponse(true, 'User posts', posts));
  } catch (err) {
    next(err);
  }
};
