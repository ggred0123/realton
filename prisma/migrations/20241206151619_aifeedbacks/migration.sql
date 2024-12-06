/*
  Warnings:

  - You are about to drop the column `ai_feedback` on the `reports` table. All the data in the column will be lost.
  - Added the required column `ai_feedback_id` to the `reports` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reports" DROP COLUMN "ai_feedback",
ADD COLUMN     "ai_feedback_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "ai_feedbacks" (
    "id" SERIAL NOT NULL,
    "ai_feedback" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ai_feedbacks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_ai_feedback_id_fkey" FOREIGN KEY ("ai_feedback_id") REFERENCES "ai_feedbacks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
