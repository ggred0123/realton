/*
  Warnings:

  - You are about to drop the column `birthday` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `city_id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `city` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `event_city` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `event_join` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `region` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `review` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `totalExp` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "city" DROP CONSTRAINT "city_region_id_fkey";

-- DropForeignKey
ALTER TABLE "event" DROP CONSTRAINT "event_category_id_fkey";

-- DropForeignKey
ALTER TABLE "event" DROP CONSTRAINT "event_host_id_fkey";

-- DropForeignKey
ALTER TABLE "event_city" DROP CONSTRAINT "event_city_city_id_fkey";

-- DropForeignKey
ALTER TABLE "event_city" DROP CONSTRAINT "event_city_event_id_fkey";

-- DropForeignKey
ALTER TABLE "event_join" DROP CONSTRAINT "event_join_event_id_fkey";

-- DropForeignKey
ALTER TABLE "event_join" DROP CONSTRAINT "event_join_user_id_fkey";

-- DropForeignKey
ALTER TABLE "review" DROP CONSTRAINT "review_event_id_fkey";

-- DropForeignKey
ALTER TABLE "review" DROP CONSTRAINT "review_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_category_id_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_city_id_fkey";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "birthday",
DROP COLUMN "category_id",
DROP COLUMN "city_id",
DROP COLUMN "deleted_at",
ADD COLUMN     "totalExp" INTEGER NOT NULL;

-- DropTable
DROP TABLE "category";

-- DropTable
DROP TABLE "city";

-- DropTable
DROP TABLE "event";

-- DropTable
DROP TABLE "event_city";

-- DropTable
DROP TABLE "event_join";

-- DropTable
DROP TABLE "region";

-- DropTable
DROP TABLE "review";

-- CreateTable
CREATE TABLE "answers" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "replies" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daily_exp" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "exp" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "daily_exp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reports" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "answers_id" INTEGER NOT NULL,
    "ai_feedback" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reports_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_exp" ADD CONSTRAINT "daily_exp_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_answers_id_fkey" FOREIGN KEY ("answers_id") REFERENCES "answers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
