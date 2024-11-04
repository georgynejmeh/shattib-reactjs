import {
  ButtonGold,
  cartIcon,
  CartItemCard,
  MainPadding,
  RoundButton,
} from "..";

const CartPage = () => {
  return (
    <main>
      <MainPadding>
        <div className="flex items-center gap-2 pb-8">
          <img className="w-12 h-12" src={cartIcon} alt="" />
          <span className="text-2xl font-bold text-gray-500">السلة</span>
        </div>

        <div className="flex justify-center pb-8">
          <RoundButton active>للشراء</RoundButton>
          <RoundButton>العينات</RoundButton>
        </div>

        {/* <div className="p-2 w-full flex flex-col">
          <div className="w-32 self-end">
            <DropDownMenuButton bordered>طلبات العينة</DropDownMenuButton>
          </div>
        </div> */}
        <div className="w-full">
          <div className="w-full">
            <div className="flex justify-center">
              <div className="flex justify-around ms-32 w-3/5 border-b-2 border-b-gray-400 py-1">
                <span className="text-lg text-gray-400">اسم المنتج</span>
                <span className="text-lg text-gray-400">الكمية</span>
                <span className="text-lg text-gray-400">السعر</span>
              </div>
            </div>
            <CartItemCard remove numbered />
            <CartItemCard remove numbered />
            <CartItemCard remove numbered />
          </div>
        </div>

        <hr className="h-0.5 border-0 bg-gray-400" />

        <div className="flex items-baseline gap-4 justify-end my-4">
          <span className="text-xl">التكلفة الكلية</span>
          <span className="text-3xl">600 ريال</span>
        </div>

        <div className="flex justify-end w-full">
          <div className="flex gap-4 w-1/3">
            <button className="border border-black rounded py-1 px-3 min-w-44">
              إضافة منتجات
            </button>
            <ButtonGold>إنشاء طلب</ButtonGold>
          </div>
        </div>
      </MainPadding>
    </main>
  );
};

export default CartPage;
