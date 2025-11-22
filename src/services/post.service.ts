import prisma from '../config/db';

export const createPost = async (userId: string, text?: string, mediaUrl?: string) => {
  return prisma.post.create({
    data: {
      userId,
      text,
      mediaUrl
    }
  });
};

export const getMyPosts = async (userId: string) => {
  return prisma.post.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' }
  });
};

export const getUserPosts = async (userId: string) => {
  return prisma.post.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' }
  });
};
