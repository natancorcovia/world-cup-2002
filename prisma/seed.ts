import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const players = [
    { name: 'Marcos', number: 1, position: 'GOL', goals: 0, assists: 0 },
    { name: 'Dida', number: 12, position: 'GOL', goals: 0, assists: 0 },
    { name: 'Cafu', number: 2, position: 'DEF', goals: 0, assists: 2 },
    {
      name: 'Roberto Carlos',
      number: 6,
      position: 'DEF',
      goals: 1,
      assists: 3,
    },
    { name: 'Lúcio', number: 3, position: 'DEF', goals: 0, assists: 1 },
    { name: 'Roque Júnior', number: 4, position: 'DEF', goals: 0, assists: 0 },
    { name: 'Belletti', number: 20, position: 'DEF', goals: 0, assists: 1 },
    { name: 'Júnior', number: 23, position: 'DEF', goals: 0, assists: 0 },
    { name: 'Edmílson', number: 5, position: 'MDE', goals: 0, assists: 0 },
    {
      name: 'Gilberto Silva',
      number: 5,
      position: 'MDE',
      goals: 0,
      assists: 1,
    },
    { name: 'Kléberson', number: 8, position: 'MDE', goals: 1, assists: 0 },
    { name: 'Ronaldinho', number: 11, position: 'MDE', goals: 2, assists: 5 },
    { name: 'Vampeta', number: 21, position: 'MDE', goals: 0, assists: 0 },
    { name: 'Alex', number: 25, position: 'MDE', goals: 0, assists: 0 },
    { name: 'Ronaldo', number: 9, position: 'ATA', goals: 8, assists: 3 },
    { name: 'Rivaldo', number: 10, position: 'ATA', goals: 5, assists: 4 },
    { name: 'Edílson', number: 16, position: 'ATA', goals: 1, assists: 0 },
    { name: 'Reinaldo', number: 17, position: 'ATA', goals: 0, assists: 0 },
    { name: 'Rodrigo', number: 24, position: 'ATA', goals: 0, assists: 0 },
    { name: 'Ricardinho', number: 7, position: 'MDE', goals: 0, assists: 1 },
  ];

  for (const player of players) {
    await prisma.player.create({ data: player });
  }

  console.log('✅ Seed completed with 20 players!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
