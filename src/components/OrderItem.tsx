import { productImg, TitleNumber } from "..";

interface Props {
  index: number;
}

const OrderItem = ({ index }: Props) => {
  return (
    <div className="flex justify-around items-center gap-4 border-b-2">
      <h1 className="text-xl font-bold">{index}</h1>
      <div className="bg-gray-100 h-16 aspect-video py-2 px-6 rounded">
        <img className="w-full h-full rounded" src={productImg} alt="" />
      </div>
      <TitleNumber column subTitle="طقم شطاف">
        طقم شطاف WG 006
      </TitleNumber>
      <TitleNumber inverse column subTitle="x6">
        الكمية المطلوبة
      </TitleNumber>
      <TitleNumber inverse column subTitle="250 ريال">
        السعر الإجمالي
      </TitleNumber>
    </div>
  );
};

export default OrderItem;
