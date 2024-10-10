import { AccentText, productImg, QuantityControls } from ".";

const CartItemCard = () => {
  return (
    <div className="flex items-center gap-12 my-8">
      <h1 className="text-2xl font-bold">1</h1>
      <div className="flex justify-around items-center rounded-xl bg-gray-100 h-32 w-full">
        <img className="rounded-xl h-28 w-20" src={productImg} alt="" />
        <div>
          <h1 className="text-xl font-bold">طقم شطاف WG006</h1>
          <h2 className="text-xl font-bold text-gray-400">طقم شطاف</h2>
        </div>
        <QuantityControls />
        <AccentText>50 - 70 ريال</AccentText>
      </div>
    </div>
  );
};

export default CartItemCard;
