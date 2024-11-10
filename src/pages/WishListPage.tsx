import { addToBoxIcon, Button, CartItemCard, MainPadding } from "..";

const WishListPage = () => {
  const temp = [1, 2, 3];
  return (
    <main>
      <MainPadding>
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
          {temp.map((index) => (
            <CartItemCard
              key={index}
              name="طقم شطاف WG004"
              price={0}
              productId={0}
              onQuantityChange={() => {}}
              quantity={1}
              onRemove={() => {}}
            />
          ))}
        </section>
      </MainPadding>
    </main>
  );
};

export default WishListPage;
