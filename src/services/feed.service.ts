import prisma from '../config/db';

export const getFeed = async (userId: string, page = 1, limit = 10) => {
  const offset = (page - 1) * limit;

  const following = await prisma.follow.findMany({
    where: { followerId: userId },
    select: { followingId: true }
  });

  const ids = [userId, ...following.map(f => f.followingId)];

  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      where: { userId: { in: ids } },
      orderBy: { createdAt: 'desc' },
      skip: offset,
      take: limit,
      include: { user: true }
    }),
    prisma.post.count({
      where: { userId: { in: ids } }
    })
  ]);

  return {
    posts,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit)
  };
};
