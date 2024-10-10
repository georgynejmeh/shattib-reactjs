import {
  heartIcon,
  Button,
  addToCartIcon,
  testImg,
  useState,
  Link,
  redHeartIcon,
} from ".";

const ProductCard = () => {
  const [active, setActive] = useState(false);
  return (
    <Link to={"/product"}>
      <div className="h-96 w-64 rounded-xl bg-gray-200 shadow shadow-gray-500 transition-all duration-700 hover:bg-amber-100">
        <div className="relative h-1/2">
          <img
            className="rounded-t-xl h-full w-full object-cover"
            src={testImg}
            alt=""
          />
          <button onClick={() => setActive(!active)}>
            <div className="absolute top-0 m-2 flex items-center justify-center h-12 w-12 rounded-full bg-white transition-all duration-700 hover:bg-red-200">
              <img src={active ? redHeartIcon : heartIcon} alt="" />
            </div>
          </button>
        </div>
        <div className="flex flex-col p-2">
          <h2 className="text-lg font-bold">طقم شطاف WG 006</h2>
          <span className="text-sm text-gray-600 py-1">طقم شطاف</span>
          <p>إمكانية التحكم بالمياه من خلال عصا سهلة الاستخدام</p>
          <span className="self-end text-lg font-bold text-yellow-600">
            50 - 70 ريال
          </span>
          <div className="mx-2 my-1">
            <Button size="md">
              <div className="flex justify-center">
                أضف إلى السلة{" "}
                <img className="ps-2" src={addToCartIcon} alt="" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
