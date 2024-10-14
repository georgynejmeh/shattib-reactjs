import { Button, cartIcon, CartItemCard } from ".";
import { DropDownMenuButton } from "../components";
import MainPadding from "../components/MainPadding";

const CartPage = () => {
  return (
    <main>
      <MainPadding>
        <div className="flex items-center gap-2 pb-8">
          <img className="w-12 h-12" src={cartIcon} alt="" />
          <span className="text-2xl font-bold text-gray-500">السلة</span>
        </div>
        <div className="p-2 w-full flex flex-col">
          <div className="w-32 self-end">
            <DropDownMenuButton bordered>طلبات العينة</DropDownMenuButton>
          </div>
        </div>
        <div className="w-screen">
          <div className="w-3/4">
            <div className="flex justify-end">
              <div className="flex justify-around w-3/4 border-b-2 border-b-gray-400 py-1">
                <span className="text-lg text-gray-400">اسم المنتج</span>
                <span className="text-lg text-gray-400">الكمية</span>
                <span className="text-lg text-gray-400">السعر</span>
              </div>
            </div>
            <CartItemCard numbered />
            <CartItemCard numbered />
            <CartItemCard numbered />
          </div>
        </div>
        <div className="flex justify-end w-full p-8">
          <div className="flex gap-4 w-1/3">
            <Button size="md">طلب عينة</Button>
            <Button size="md">شراء</Button>
          </div>
        </div>
      </MainPadding>
    </main>
  );
};

export default CartPage;
