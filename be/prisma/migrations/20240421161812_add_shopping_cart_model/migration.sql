-- CreateTable
CREATE TABLE "shopping_carts" (
    "id" SERIAL NOT NULL,
    "total" INTEGER NOT NULL,
    "user_email" VARCHAR(100) NOT NULL,

    CONSTRAINT "shopping_carts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductToShopping_cart" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToShopping_cart_AB_unique" ON "_ProductToShopping_cart"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToShopping_cart_B_index" ON "_ProductToShopping_cart"("B");

-- AddForeignKey
ALTER TABLE "shopping_carts" ADD CONSTRAINT "shopping_carts_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToShopping_cart" ADD CONSTRAINT "_ProductToShopping_cart_A_fkey" FOREIGN KEY ("A") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToShopping_cart" ADD CONSTRAINT "_ProductToShopping_cart_B_fkey" FOREIGN KEY ("B") REFERENCES "shopping_carts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
