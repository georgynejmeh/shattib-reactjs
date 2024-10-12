import { addToBoxIcon, Button, CartItemCard } from ".";

const WishListPage = () => {
  return (
    <>
      <main className="flex flex-col gap-8 px-32">
        <section className="flex flex-col gap-4 py-2">
          <h1 className="text-2xl font-bold">قائمة الرغبات</h1>
          <h2 className="text-xl text-gray-400">
            يمكنك إضافة منتجات جديدة ليتم توفيرها على الموقع أو تنفيذ طلب خاص لك
          </h2>
        </section>
        <section className="px-16">
          <div className="flex flex-row-reverse w-full">
            <div className="w-44">
              <Button size="md">
                <div className="flex justify-center gap-4">
                  <img src={addToBoxIcon} alt="" />
                  <span>أضف منتج</span>
                </div>
              </Button>
            </div>
          </div>
          <CartItemCard />
          <CartItemCard />
          <CartItemCard />
        </section>
      </main>
    </>
  );
};

export default WishListPage;
