import { PrismaClient } from '../generated/prisma';
const prisma = new PrismaClient();

async function main() {
  const players = [
    { name: 'Marcos', number: 12, position: 'Goleiro', goals: 0, assists: 0 },
    {
      name: 'Cafu',
      number: 2,
      position: 'Lateral Direito',
      goals: 0,
      assists: 0,
    },
    { name: 'Lúcio', number: 3, position: 'Zagueiro', goals: 0, assists: 0 },
    {
      name: 'Roque Júnior',
      number: 4,
      position: 'Zagueiro',
      goals: 0,
      assists: 0,
    },
    { name: 'Edmilson', number: 6, position: 'Zagueiro', goals: 1, assists: 0 },
    {
      name: 'Roberto Carlos',
      number: 6,
      position: 'Lateral Esquerdo',
      goals: 0,
      assists: 2,
    },
    {
      name: 'Gilberto Silva',
      number: 3,
      position: 'Volante',
      goals: 0,
      assists: 0,
    },
    { name: 'Kléberson', number: 8, position: 'Meia', goals: 1, assists: 0 },
    { name: 'Ricardinho', number: 7, position: 'Meia', goals: 0, assists: 1 },
    { name: 'Rivaldo', number: 10, position: 'Atacante', goals: 5, assists: 3 },
    {
      name: 'Ronaldinho',
      number: 11,
      position: 'Meia/Atacante',
      goals: 2,
      assists: 2,
    },
    { name: 'Ronaldo', number: 9, position: 'Atacante', goals: 8, assists: 1 },
    { name: 'Edílson', number: 7, position: 'Atacante', goals: 2, assists: 0 },
    {
      name: 'Marcio Santos',
      number: 5,
      position: 'Zagueiro',
      goals: 0,
      assists: 0,
    },
    { name: 'Kaká', number: 18, position: 'Meia', goals: 0, assists: 0 },
    {
      name: 'Juninho Paulista',
      number: 14,
      position: 'Meia',
      goals: 0,
      assists: 0,
    },
    {
      name: 'Belletti',
      number: 20,
      position: 'Lateral Direito',
      goals: 0,
      assists: 0,
    },
    { name: 'Edmílson', number: 6, position: 'Volante', goals: 0, assists: 0 },
    { name: 'Ricardo', number: 1, position: 'Goleiro', goals: 0, assists: 0 },
    { name: 'Dida', number: 22, position: 'Goleiro', goals: 0, assists: 0 },
    {
      name: 'Anderson Polga',
      number: 15,
      position: 'Zagueiro',
      goals: 0,
      assists: 0,
    },
    {
      name: 'Ronaldo Fenômeno',
      number: 9,
      position: 'Atacante',
      goals: 8,
      assists: 1,
    },
    {
      name: 'Ronaldinho Gaúcho',
      number: 11,
      position: 'Meia/Atacante',
      goals: 2,
      assists: 2,
    },
    {
      name: 'Juninho Paulista',
      number: 14,
      position: 'Meia',
      goals: 0,
      assists: 0,
    },
  ];

  for (const player of players) {
    await prisma.player.create({ data: player });
  }

  console.log('Seed completo: 26 jogadores adicionados!');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
