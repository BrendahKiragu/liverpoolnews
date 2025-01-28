// prisma/seed.js

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const players = [
  // goalkeppers
  {
    name: "Alisson Becker",
    position: "Goalkeeper",
    nationality: "Brazilian",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-06/alisson-becker-profile-body-shot-202425.webp?itok=D-oGA5b0",
    worth: 60.0,
  },
  {
    name: "Caoimhin Kelleher",
    position: "Goalkeeper",
    nationality: "Irish",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-06/caoimhin-kelleher-profile-body-shot-202425.webp?itok=kcFEtWry",
    worth: 10.0,
  },
  // Defender players
  {
    name: "Virgil van Dijk",
    position: "Defender",
    nationality: "Dutch",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-06/virgil-van-dijk-profile-body-shot-202425.webp?itok=MBtAVuAO",
    worth: 80.0,
  },
  {
    name: "Ibrahima Konaté",
    position: "Defender",
    nationality: "French",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-06/ibrahima-konate-body-shot-202425.webp?itok=4veiywES",
    worth: 50.0,
  },
  {
    name: "Kostas Tsimikas",
    position: "Defender",
    nationality: "Cameroonian",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-06/kostas-tsimikas-body-shot-202425.webp?itok=NotKfJQW",
    worth: 30.0,
  },
  {
    name: "Trent Alexander-Arnold",
    position: "Defender",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-06/trent-alexander-arnold-profile-body-shot-202425.webp?itok=0blShiH5",
    worth: 60.0,
  },
  {
    name: "Andrew Robertson",
    position: "Defender",
    nationality: "Scottish",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-06/andy-robertson-body-shot-202425.webp?itok=yEY5Mse8",
    worth: 50.0,
  },
  {
    name: "Conor Bradley",
    position: "Defender",
    nationality: "Irish",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-06/conor-bradley-profile-action-shot-202425.webp?itok=VrpqS69P",
    worth: 50.0,
  },
  {
    name: "Joe Gomez",
    position: "Defender",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-06/joe-gomez-profile-body-shot-202425.webp?itok=t7Mobau_",
    worth: 50.0,
  },
  // midfield players

  {
    name: "Tyler Morton",
    position: "Midfielder",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-09/tyler-morton-bodyshot-202425.webp?itok=njg6mJWp",
    worth: 25.0,
  },
  {
    name: "Ryan Gravenberch",
    position: "Midfielder",
    nationality: "Dutch",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-06/ryan-gravenberch-profile-body-shot-202425.webp?itok=HxRkB8dw",
    worth: 45.0,
  },
  {
    name: "Curtis Jones",
    position: "Midfielder",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-06/curtis-jones-profile-body-shot-202425.webp?itok=nAWNWoCY",
    worth: 40.0,
  },
  {
    name: "Alexis Mac Allister",
    position: "Midfielder",
    nationality: "Argentinian",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-06/alexis-mac-allister-profile-action-shot-202425.webp?itok=WQiKkyzI",
    worth: 25.0,
  },
  {
    name: "Dominik Szoboszlai",
    position: "Midfielder",
    nationality: "Hungarian",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-06/dominik-szoboszlai-profile-body-shot-202425.webp?itok=0ECPUxb0",
    worth: 20.0,
  },
  {
    name: "Fedirico Chiesa",
    position: "Midfielder",
    nationality: "Italian",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-09/federico-chiesa-headshot-new-202425.webp?itok=ekpoPvwL",
    worth: 18.0,
  },
  {
    name: "Wataru Endo",
    position: "Midfielder",
    nationality: "Japanese",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-06/wataru-endo-profile-body-shot-202425.webp?itok=7JAEHJpB",
    worth: 75.0,
  },
  {
    name: "Harvey Elliott",
    position: "Midfielder",
    nationality: "Belgian",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-06/harvey-elliott-profile-body-shot-202425.webp?itok=F4DReS5n",
    worth: 15.0,
  },
  // Forward players
  {
    name: "Cody Gakpo",
    position: "Forward",
    nationality: "Dutch",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-06/cody-gakpo-profile-body-shot-202425.webp?itok=6ehPnnMk",
    worth: 90.0,
  },
  {
    name: "Diogo Jota",
    position: "Forward",
    nationality: "Portuguese",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-06/diogo-jota-profile-headshot-202425.webp?itok=CsWBVQ4v",
    worth: 50.0,
  },
  {
    name: "Mohammed Salah",
    position: "Forward",
    nationality: "Brazilian",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/mohamed-salah-headshot-v3-2024.webp?itok=sPITcM67",
    worth: 40.0,
  },
  {
    name: "Darwin Núñez",
    position: "Forward",
    nationality: "Uruguayan",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-06/darwin-nunez-profile-headshot-202425.webp?itok=ctVt-G9c",
    worth: 70.0,
  },
  {
    name: "Luis Díaz",
    position: "Forward",
    nationality: "Colombian",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-06/luis-diaz-profile-headshot-202425.webp?itok=WkV90Wpr",
    worth: 60.0,
  },
  {
    name: "Divock Origi",
    position: "Forward",
    nationality: "Belgian",
    image: "https://resources.liverpoolfc.com/images/team/divock-origi.jpg",
    worth: 15.0,
  },
];

async function seed() {
  try {
    // Clear previous records (optional)
    // await prisma.players.deleteMany({});
    await prisma.$executeRaw`TRUNCATE TABLE "Players" RESTART IDENTITY CASCADE`;

    console.log("Cleared previous records successfully.");

    // Seed new data
    for (const player of players) {
      await prisma.players.create({
        data: player,
      });
      console.log("Seeded player:", player.name);
    }

    console.log(`Seeded ${players.length} players successfully.`);
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
