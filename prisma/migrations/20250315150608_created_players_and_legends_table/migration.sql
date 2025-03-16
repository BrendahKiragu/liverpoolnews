-- CreateTable
CREATE TABLE "Legends" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "worth" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Legends_pkey" PRIMARY KEY ("id")
);
