import prisma from '../config/db';

export const followUser = async (followerId: string, followingId: string) => {
  if (followerId === followingId) {
    const error = new Error('Cannot follow yourself');
    (error as any).status = 400;
    throw error;
  }

  await prisma.user.findUniqueOrThrow({ where: { id: followingId } });

  return prisma.follow.create({
    data: {
      followerId,
      followingId
    }
  });
};

export const unfollowUser = async (followerId: string, followingId: string) => {
  return prisma.follow.deleteMany({
    where: {
      followerId,
      followingId
    }
  });
};

export const getFollowers = async (userId: string) => {
  return prisma.follow.findMany({
    where: { followingId: userId },
    include: { follower: true }
  });
};

export const getFollowing = async (userId: string) => {
  return prisma.follow.findMany({
    where: { followerId: userId },
    include: { following: true }
  });
};

export const getUserById = async (id: string) => {
  return prisma.user.findUnique({ where: { id } });
};
