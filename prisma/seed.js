// prisma/seed.js

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const players = [
  {
    name: "Alisson Becker",
    position: "Goalkeeper",
    nationality: "Brazilian",
    image: "https://www.liverpoolfc.com/team/mens/player/alisson-becker",
    worth: 60.0,
  },
  {
    name: "Caoimhin Kelleher",
    position: "Goalkeeper",
    nationality: "Irish",
    image: "https://www.liverpoolfc.com/team/mens/player/caoimhin-kelleher",
    worth: 10.0,
  },
  {
    name: "Virgil van Dijk",
    position: "Defender",
    nationality: "Dutch",
    image: "https://resources.liverpoolfc.com/images/team/virgil-van-dijk.jpg",
    worth: 80.0,
  },
  {
    name: "Ibrahima Konaté",
    position: "Defender",
    nationality: "French",
    image: "https://resources.liverpoolfc.com/images/team/ibrahima-konate.jpg",
    worth: 50.0,
  },
  {
    name: "Joel Matip",
    position: "Defender",
    nationality: "Cameroonian",
    image: "https://resources.liverpoolfc.com/images/team/joel-matip.jpg",
    worth: 30.0,
  },
  {
    name: "Trent Alexander-Arnold",
    position: "Defender",
    nationality: "English",
    image:
      "https://resources.liverpoolfc.com/images/team/trent-alexander-arnold.jpg",
    worth: 60.0,
  },
  {
    name: "Andrew Robertson",
    position: "Defender",
    nationality: "Scottish",
    image: "https://resources.liverpoolfc.com/images/team/andrew-robertson.jpg",
    worth: 50.0,
  },
  {
    name: "James Milner",
    position: "Midfielder",
    nationality: "English",
    image: "https://resources.liverpoolfc.com/images/team/james-milner.jpg",
    worth: 10.0,
  },
  {
    name: "Jordan Henderson",
    position: "Midfielder",
    nationality: "English",
    image: "https://resources.liverpoolfc.com/images/team/jordan-henderson.jpg",
    worth: 25.0,
  },
  {
    name: "Fabinho",
    position: "Midfielder",
    nationality: "Brazilian",
    image: "https://resources.liverpoolfc.com/images/team/fabinho.jpg",
    worth: 45.0,
  },
  {
    name: "Thiago Alcântara",
    position: "Midfielder",
    nationality: "Spanish",
    image: "https://resources.liverpoolfc.com/images/team/thiago-alcantara.jpg",
    worth: 40.0,
  },
  {
    name: "Naby Keïta",
    position: "Midfielder",
    nationality: "Guinean",
    image: "https://resources.liverpoolfc.com/images/team/naby-keita.jpg",
    worth: 25.0,
  },
  {
    name: "Harvey Elliott",
    position: "Midfielder",
    nationality: "English",
    image: "https://resources.liverpoolfc.com/images/team/harvey-elliott.jpg",
    worth: 20.0,
  },
  {
    name: "Curtis Jones",
    position: "Midfielder",
    nationality: "English",
    image: "https://resources.liverpoolfc.com/images/team/curtis-jones.jpg",
    worth: 18.0,
  },
  {
    name: "Mohamed Salah",
    position: "Forward",
    nationality: "Egyptian",
    image: "https://resources.liverpoolfc.com/images/team/mohamed-salah.jpg",
    worth: 90.0,
  },
  {
    name: "Sadio Mané",
    position: "Forward",
    nationality: "Senegalese",
    image: "https://resources.liverpoolfc.com/images/team/sadio-mane.jpg",
    worth: 75.0,
  },
  {
    name: "Diogo Jota",
    position: "Forward",
    nationality: "Portuguese",
    image: "https://resources.liverpoolfc.com/images/team/diogo-jota.jpg",
    worth: 50.0,
  },
  {
    name: "Roberto Firmino",
    position: "Forward",
    nationality: "Brazilian",
    image: "https://resources.liverpoolfc.com/images/team/roberto-firmino.jpg",
    worth: 40.0,
  },
  {
    name: "Darwin Núñez",
    position: "Forward",
    nationality: "Uruguayan",
    image: "https://resources.liverpoolfc.com/images/team/darwin-nunez.jpg",
    worth: 70.0,
  },
  {
    name: "Luis Díaz",
    position: "Forward",
    nationality: "Colombian",
    image: "https://resources.liverpoolfc.com/images/team/luis-diaz.jpg",
    worth: 60.0,
  },
  {
    name: "Divock Origi",
    position: "Forward",
    nationality: "Belgian",
    image: "https://resources.liverpoolfc.com/images/team/divock-origi.jpg",
    worth: 15.0,
  },
  // Add more players if needed...
];

async function seed() {
  try {
    // Clear previous records (optional)
    await prisma.players.deleteMany({});

    // Seed new data
    for (const player of players) {
      await prisma.players.create({
        data: player,
      });
    }

    console.log(`Seeded ${players.length} players successfully.`);
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
