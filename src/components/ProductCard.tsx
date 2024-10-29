import {
  heartIcon,
  addToCartIcon,
  testImg,
  useState,
  Link,
  redHeartIcon,
  AccentText,
  ButtonGold,
} from "..";

const ProductCard = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="pb-2 h-80 w-64 rounded-xl bg-gray-50 shadow shadow-gray-500 transition-all duration-700 hover:bg-amber-100">
      <div className="relative h-1/2">
        <Link to={"/product"}>
          <img
            className="rounded-t-xl h-full w-full object-cover"
            src={testImg}
            alt=""
          />
        </Link>
        <button onClick={() => setActive(!active)}>
          <div className="absolute top-0 m-2 flex items-center justify-center h-12 w-12 rounded-full bg-white transition-all duration-700 hover:bg-red-200">
            <img src={active ? redHeartIcon : heartIcon} alt="" />
          </div>
        </button>
      </div>
      <Link to={"/product"}>
        <div className="h-1/2 flex flex-col justify-between p-2">
          <h2 className="text-lg font-bold">طقم شطاف WG 006</h2>
          {/* <span className="text-sm text-gray-600 py-1">طقم شطاف</span>
          <p>إمكانية التحكم بالمياه من خلال عصا سهلة الاستخدام</p> */}
          <span>
            <AccentText>50 ريال</AccentText>
          </span>
          <div className="mx-2 my-1">
            <ButtonGold>
              <div className="flex justify-center">
                أضف إلى السلة{" "}
                <img className="ps-2" src={addToCartIcon} alt="" />
              </div>
            </ButtonGold>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
