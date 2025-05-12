// prisma/seed.ts
import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  // Create users
  const user1 = await prisma.users.create({
    data: { username: "alice", password: "password123" },
  });

  const user2 = await prisma.users.create({
    data: { username: "bob", password: "securepass" },
  });

  // Create clubs
  const club1 = await prisma.clubs.create({
    data: { name: "Chess Club" },
  });

  const club2 = await prisma.clubs.create({
    data: { name: "Book Club" },
  });

  // Join users to clubs
  await prisma.users_clubs.createMany({
    data: [
      { user_id: user1.id, club_id: club1.id },
      { user_id: user2.id, club_id: club1.id },
      { user_id: user2.id, club_id: club2.id },
    ],
  });

  // Create posts
  await prisma.posts.createMany({
    data: [
      {
        title: "Opening Strategies",
        content: "Always control the center!",
        author_id: user1.id,
        club_id: club1.id,
      },
      {
        title: "Favorite Books",
        content: "I just finished 1984. Loved it!",
        author_id: user2.id,
        club_id: club2.id,
      },
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
