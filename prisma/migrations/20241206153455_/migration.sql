/*
  Warnings:

  - You are about to drop the column `ai_feedback_id` on the `reports` table. All the data in the column will be lost.
  - You are about to drop the `ai_feedbacks` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ai_feedback` to the `reports` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "reports" DROP CONSTRAINT "reports_ai_feedback_id_fkey";

-- AlterTable
ALTER TABLE "reports" DROP COLUMN "ai_feedback_id",
ADD COLUMN     "ai_feedback" TEXT NOT NULL;

-- DropTable
DROP TABLE "ai_feedbacks";
