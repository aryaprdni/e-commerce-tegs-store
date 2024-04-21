-- CreateTable
CREATE TABLE "transactions" (
    "id" SERIAL NOT NULL,
    "total" INTEGER NOT NULL,
    "status" VARCHAR(100) NOT NULL,
    "snap_token" VARCHAR(100),
    "snap_redirect_url" VARCHAR(100),
    "payment_method" VARCHAR(100),
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "user_email" VARCHAR(100) NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
