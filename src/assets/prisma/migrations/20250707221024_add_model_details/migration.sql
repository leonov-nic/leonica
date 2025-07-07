-- CreateTable
CREATE TABLE "cats" (
    "idcat" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "titleText" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "likes_count" INTEGER NOT NULL,

    CONSTRAINT "cats_pkey" PRIMARY KEY ("idcat")
);

-- CreateTable
CREATE TABLE "likes" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "cat_id" TEXT NOT NULL,

    CONSTRAINT "likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "details" (
    "id" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "longName" TEXT NOT NULL,
    "normOfMinute" DOUBLE PRECISION,
    "customer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "details_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "cats_titleText_idx" ON "cats"("titleText");

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_cat_id_fkey" FOREIGN KEY ("cat_id") REFERENCES "cats"("idcat") ON DELETE CASCADE ON UPDATE CASCADE;
