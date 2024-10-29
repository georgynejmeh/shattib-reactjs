import { AccentText, productImg, QuantityControls } from "..";

interface Props {
  numbered?: boolean;
}

const CartItemCard = ({ numbered }: Props) => {
  return (
    <div className="flex items-center gap-12 my-8">
      {numbered ? <h1 className="text-2xl font-bold">1</h1> : null}
      <div className="flex justify-around items-center rounded-xl bg-gray-100 h-32 w-full">
        <img className="rounded-xl h-28 w-20" src={productImg} alt="" />
        <div>
          <h1 className="text-xl font-bold">طقم شطاف WG006</h1>
          <h2 className="text-xl font-bold text-gray-400">طقم شطاف</h2>
        </div>
        <div className="w-32">
          <QuantityControls />
        </div>
        <AccentText>50 - 70 ريال</AccentText>
      </div>
    </div>
  );
};

export default CartItemCard;
