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
  {
    name: "Vitezslav Jaros",
    position: "Goalkeeper",
    nationality: "Czech",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-08/vitezslav-jaros-bodyshot-alternative-202425.webp?itok=lyTW9I8B",
    worth: 15.0,
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
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-09/federico-chiesa-bodyshot-alternative-new-202425.webp?itok=CQVCdbRb",
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
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-06/diogo-jota-profile-action-shot-202425.webp?itok=zKcTKcRF",
    worth: 50.0,
  },
  {
    name: "Mohammed Salah",
    position: "Forward",
    nationality: "Brazilian",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-08/mohamed-salah-alternative-body-v2-2024.webp?itok=-25znOcr",
    worth: 40.0,
  },
  {
    name: "Darwin Núñez",
    position: "Forward",
    nationality: "Uruguayan",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-06/darwin-nunez-profile-action-shot-202425.webp?itok=uiVRpwU4",
    worth: 70.0,
  },
  {
    name: "Luis Díaz",
    position: "Forward",
    nationality: "Colombian",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-06/luis-diaz-profile-action-shot-202425.webp?itok=kklJLtCH",
    worth: 60.0,
  },
];

const legends = [
  // Goalkeepers
  {
    name: "Nathan Morana",
    position: "Goalkeeper",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/nathan-morana-headshot-202425.webp?itok=wtMJ5WTk",
    worth: 22.2,
  },
  {
    name: "Kornel Misciur",
    position: "Goalkeeper",
    nationality: "Polish/British",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/kornel-misciur-headshot-202425.webp?itok=9UxQxwPw",
    worth: 22.2,
  },
  {
    name: "Reece Trueman",
    position: "Goalkeeper",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/reece-trueman-headshot-202425.webp?itok=P6hG1Nz_",
    worth: 22.2,
  },
  {
    name: "Jakub Ojrzynski",
    position: "Goalkeeper",
    nationality: "Polish",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2023-02/jakub-ojrzynksi.webp?itok=X5Mf43t8",
    worth: 22.2,
  },
  {
    name: "DJ Bernard",
    position: "Goalkeeper",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-09/dj-bernard-headshot-202425.webp?itok=-fER-A1g",
    worth: 22.2,
  },
  {
    name: "Bailey Hall",
    position: "Goalkeeper",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-09/bailey-hall-headshot-202425.webp?itok=9nRrW-Kp",
    worth: 22.2,
  },
  {
    name: "Jacob Poytress",
    position: "Goalkeeper",
    nationality: "British",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/jacob-poytress-headshot-202425.webp?itok=iBZ8heWt",
    worth: 22.2,
  },
  // Defenders
  {
    name: "Josh Davidson",
    position: "Defender",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/josh-davidson-headshot-202425.webp?itok=_5D9FErB",
    worth: 22.2,
  },
  {
    name: "Wellity Lucky",
    position: "Defender",
    nationality: "Spanish",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/wellity-lucky-headshot-202425.webp?itok=PL9EMyDR",
    worth: 22.2,
  },
  {
    name: "Terence Miles",
    position: "Defender",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/terence-miles-headshot-202425.webp?itok=Knl5RxpZ",
    worth: 22.2,
  },
  {
    name: "Lucas Pitt",
    position: "Defender",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/lucas-pitt-headshot-202425.webp?itok=_dCHjZkb",
    worth: 22.2,
  },
  {
    name: "Carter Pinnington",
    position: "Defender",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/carter-pinnington-headshot-202425.webp?itok=noIqJLrK",
    worth: 22.2,
  },
  {
    name: "Louis Enahoro-Marcus",
    position: "Defender",
    nationality: "British/Nigerian",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/louis-enahoro-marcus-headshot-202425.webp?itok=5dlpHrz-",
    worth: 22.2,
  },
  {
    name: "Harry Evers",
    position: "Defender",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/harry-evers-headshot-202425.webp?itok=1WUSbACC",
    worth: 22.2,
  },
  {
    name: "Clae Ewing",
    position: "Defender",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/clae-ewing-headshot-202425.webp?itok=T5AfGHtP",
    worth: 22.2,
  },
  {
    name: "Amara Nallo",
    position: "Defender",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/amara-nallo-headshot-202425.webp?itok=wWzsbQXR",
    worth: 22.2,
  },
  {
    name: "Lee Jonas",
    position: "Defender",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/lee-jonas-headshot-202425.webp?itok=FDIDMJvF",
    worth: 22.2,
  },
  {
    name: "DJ Esdaille",
    position: "Defender",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-09/dj-esdaille-headshot-202425.webp?itok=GWWPHoMz",
    worth: 22.2,
  },
  // Midfielders
  {
    name: "Kyle Kelly",
    position: "Midfielder",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/kyle-kelly-headshot-202425.webp?itok=E3woa9pW",
    worth: 22.2,
  },
  {
    name: "Michael Laffey",
    position: "Midfielder",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/michael-laffey-headshot-202425.webp?itok=RTMTupmz",
    worth: 22.2,
  },
  {
    name: "Isaac Mabaya",
    position: "Midfielder",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/isaac-mabaya-headshot-202425.webp?itok=9db9H6ON",
    worth: 22.2,
  },
  {
    name: "James McConnell",
    position: "Midfielder",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-09/james-mcconnell-headshot-202425-v2.webp?itok=tU9a66yO",
    worth: 22.2,
  },
  {
    name: "Tommy Pilling",
    position: "Midfielder",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/tommy-pilling-headshot-202425.webp?itok=uxJoK5n6",
    worth: 22.2,
  },
  {
    name: "Afolami Onanuga",
    position: "Midfielder",
    nationality: "Nigerian/British",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/afolami-onanuga-headshot-202425.webp?itok=ePuXHFd0",
    worth: 22.2,
  },
  {
    name: "Emmanuel Airoboma",
    position: "Midfielder",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/emmanuel-airoboma-headshot-202425.webp?itok=mzpxOsoA",
    worth: 22.2,
  },
  {
    name: "Ben Trueman",
    position: "Midfielder",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/ben-trueman-headshot-202425.webp?itok=VabqnPsN",
    worth: 22.2,
  },
  {
    name: "Kieran Morrison",
    position: "Midfielder",
    nationality: "English/Northern Irish",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/kieran-morrison-headshot-202425.webp?itok=EhI7D3hf",
    worth: 22.2,
  },
  {
    name: "Trey Nyoni",
    position: "Midfielder",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-09/trey-nyoni-headshot-202425-v2.webp?itok=sXeNVmc6",
    worth: 22.2,
  },
  {
    name: "James Balagizi",
    position: "Midfielder",
    nationality: "English",
    image: "/player.jpeg",
    worth: 22.2,
  },
  {
    name: "Scofield Lonmeni",
    position: "Midfielder",
    nationality: "English",
    image: "/player.jpeg",
    worth: 22.2,
  },
  {
    name: "Alvin Ayman",
    position: "Midfielder",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-09/alvin-ayman-headshot-202425_0.webp?itok=b1NVAiRm",
    worth: 22.2,
  },
  {
    name: "Joe Upton",
    position: "Midfielder",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-09/joe-upton-headshot-202425.webp?itok=6Gbi3qOk",
    worth: 22.2,
  },
  {
    name: "Oliver O'Connor",
    position: "Midfielder",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-09/oliver-oconnor-headshot-202425.webp?itok=rtJPmszT",
    worth: 22.2,
  },
  {
    name: "Ryan Cowley",
    position: "Midfielder",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-09/ryan-cowley-heasdshot-202425.webp?itok=QwEuhIjS",
    worth: 22.2,
  },
  {
    name: "Joe Bradshaw",
    position: "Midfielder",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-09/joe-bradshaw-headshot-202425.webp?itok=papcD6FU",
    worth: 22.2,
  },
  // Forwards
  {
    name: "Ranel Young",
    position: "Forward",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/ranel-young-headshot-202425.webp?itok=ghCv6JGL",
    worth: 22.2,
  },
  {
    name: "Keyrol Figueroa",
    position: "Forward",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/keyrol-figueroa-headshot-202425.webp?itok=ZsbPC6ol",
    worth: 22.2,
  },
  {
    name: "Trent Kone-Doherty",
    position: "Forward",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/trent-kone-doherty-headshot-202425.webp?itok=dSJT3XAQ",
    worth: 22.2,
  },
  {
    name: "Kareem Ahmed",
    position: "Forward",
    nationality: "English",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2024-08/kareem-ahmed-headshot-202425.webp?itok=Oq8UrewT",
    worth: 22.2,
  },
];

async function seed() {
  try {
    // Clear previous records (optional)
    // await prisma.players.deleteMany({});
    await prisma.$executeRaw`TRUNCATE TABLE "Players" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Legends" RESTART IDENTITY CASCADE`;

    console.log("Cleared previous records successfully.");

    // Seed players data
    for (const player of players) {
      await prisma.players.create({
        data: player,
      });
      console.log("Seeded player:", player.name);
    }

    console.log(`Seeded ${players.length} players successfully.`);

    // seed legend players data
    for (const legend of legends) {
      await prisma.legends.create({
        data: legend,
      });
      console.log("Seeded legend:", legend.name);
    }
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
