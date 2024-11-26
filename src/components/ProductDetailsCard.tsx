import { toast } from "react-toastify";
import {
  AccentText,
  addToBoxBlackIcon,
  addToCartIcon,
  ButtonGold,
  leftArrowCircleIcon,
  leftArrowIcon,
  QuantityControls,
  rightArrowCircleIcon,
  shattibIcon,
  TitleNumber,
  useEffect,
  useState,
} from "..";
import { useLoginModal } from "../hooks/useLoginModal";
import { useRkhamCustomMeasure } from "../hooks/useRkhamCustomMeasure";
import { CartItem } from "../models/CartItem";
import { Product } from "../models/Product";

interface Props {
  data?: Product;
}

const ProductDetailsCard = ({ data }: Props) => {
  const token = localStorage.getItem("accessToken");
  const userType = localStorage.getItem("userType");
  const { setIsShownLoginModal } = useLoginModal();
  const [quantity, setQuantity] = useState(1); // Track quantity
  const [includeInstallation, setIncludeInstallation] = useState(false);
  const { setIsShownRkahmCustomMeasureModal } = useRkhamCustomMeasure();

  const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
  useEffect(() => {
    const productInCart = storedCart.find(
      (item: CartItem) => item.productId === data?.id
    );
    if (productInCart) {
      setQuantity(productInCart.quantity);
    }
  }, [storedCart, data]);

  // const [active, setActive] = useState(false);
  const handleRequestSample = () => {
    const existingSamples = JSON.parse(
      localStorage.getItem("samplesCart") || "[]"
    );

    if (data) {
      // Check if the product already exists in the samples cart
      const productInSamplesCart = existingSamples.find(
        (item: CartItem) => item.productId === data.id
      );

      if (productInSamplesCart) {
        // If the product already exists, replace its quantity with the new one
        productInSamplesCart.quantity = quantity;
      } else {
        // If the product is not in the samples cart, add it with only necessary data
        existingSamples.push({
          productId: data.id,
          name: data.name,
          price: data.price,
          quantity: quantity,
          image: data.images[0].imagePath,
        });
      }

      // Save the updated samples cart to localStorage
      localStorage.setItem("samplesCart", JSON.stringify(existingSamples));
      toast.success("تمت الإضافة إلى العينات بنجاح", {
        theme: "colored",
        style: { backgroundColor: "#c18a33" },
        icon: () => <img src={shattibIcon} />,
      });
    }
  };

  // Add product to cart in localStorage
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (data) {
      // Check if the product already exists in the cart
      const productInCart = existingCart.find(
        (item: CartItem) => item.productId === data.id
      );

      if (productInCart) {
        // If the product already exists, replace its quantity with the new one
        productInCart.quantity = quantity;
        setIncludeInstallation(productInCart.withInstallation || false);
      } else {
        // If the product is not in the cart, add it with only necessary data
        console.log(includeInstallation);
        existingCart.push({
          productId: data.id,
          name: data.name,
          price: data.price,
          image: data.images[0].imagePath,
          quantity: quantity,
          withInstallation: includeInstallation,
        });
      }

      // Save the updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(existingCart));
      toast.success("تمت الإضافة إلى السلة بنجاح", {
        theme: "colored",
        style: { backgroundColor: "#c18a33" },
        icon: () => <img src={shattibIcon} />,
      });
    }
  };
  // const handleAddToFavorites = () => {
  //   const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  //   const existingProductIndex = favorites.findIndex(
  //     (item: { productId: number }) => item.productId === data?.id
  //   );

  //   if (existingProductIndex === -1) {
  //     favorites.push({
  //       productId: data?.id,
  //       name: data?.name,
  //       price: data?.price,
  //       image: data?.images[0].imagePath,
  //     });
  //     localStorage.setItem("favorites", JSON.stringify(favorites));
  //   }
  // };

  const [activeImage, setActiveImage] = useState<string | undefined>(
    data!.images[0].imagePath
  );
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
  const [price, setPrice] = useState<number>(data!.price);
  // TODO DELETE
  // const temp = [1, 2, 3, 4, 5];

  if (data) {
    return (
      <>
        {/* MAX-LG */}
        <div className="max-lg:hidden flex justify-between  rounded-xl w-5/6  bg-gray-100">
          {/* Right section */}
          <section className="flex flex-col justify-between items-start gap-4 rounded-xl w-3/4 m-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-bold">{data.name}</h1>
              <h2 className="text-gray-500">{data.brand}</h2>
            </div>
            <div className="flex items-center gap-4">
              <AccentText>{price} ريال</AccentText>
            </div>
            <hr className="w-full" />
            <div>
              <div className="flex justify-between items-stretch gap-8">
                <div className="w-full">
                  <TitleNumber column subTitle={data.color}>
                    اللون
                  </TitleNumber>
                </div>
                <div className="w-full">
                  <TitleNumber column subTitle={`${data.measurements}`}>
                    القياس
                  </TitleNumber>
                </div>
                <div className="w-full">
                  <TitleNumber column subTitle={data.measurementUnit}>
                    وحدة القياس
                  </TitleNumber>
                </div>
                <div className="w-full">
                  <TitleNumber column subTitle={data.manufacturingCountry}>
                    بلد التصنيع
                  </TitleNumber>
                </div>
              </div>
            </div>

            <hr className="w-full" />

            {userType === "Client" && (
              <div>
                <div className="flex gap-4 w-52">
                  <span className="text-lg">الكمية</span>
                  <QuantityControls
                    quantity={quantity}
                    onChange={setQuantity}
                  />
                </div>
                <div className="mt-6">
                  <label>
                    <input
                      type="checkbox"
                      checked={includeInstallation}
                      onChange={(e) => {
                        console.log("checked", e.target.checked);
                        if (e.target.checked) {
                          setIncludeInstallation(true);
                          setPrice(data.price + data.installationTeam);
                        } else {
                          setIncludeInstallation(false);
                          setPrice((prev) => prev - data.installationTeam);
                        }
                      }}
                    />
                    طلب أعمال التركيب (+{data.installationTeam} ر.س)
                  </label>
                </div>
              </div>
            )}
            <div className="w-80 flex flex-col gap-4">
              {userType === "Business" ? null : data.categoryId === 1 ? (
                <div
                  onClick={() => {
                    if (!token) {
                      setIsShownLoginModal(true);
                      return;
                    }
                    setIsShownRkahmCustomMeasureModal(true);
                  }}
                  className="w-15 h-15 flex items-center justify-center cursor-pointer"
                >
                  <ButtonGold>طلب قياس مخصص</ButtonGold>
                </div>
              ) : (
                <ButtonGold
                  onClick={
                    token ? handleAddToCart : () => setIsShownLoginModal(true)
                  }
                >
                  <div className="flex justify-center gap-2">
                    <img src={addToCartIcon} alt="" />
                    <span>أضف إلى السلة</span>
                  </div>
                </ButtonGold>
              )}

              {userType === "Business" ? null : (
                <button
                  onClick={
                    token
                      ? handleRequestSample
                      : () => setIsShownLoginModal(true)
                  }
                  className="rounded border border-black py-1 bg-white"
                >
                  <div className="flex justify-center gap-2 text-black">
                    <img src={addToBoxBlackIcon} alt="" />
                    <span>طلب عينة</span>
                  </div>
                </button>
              )}
            </div>
          </section>

          {/* Left section */}
          <section className="flex flex-col gap-4 rounded-xl w-full m-8">
            <div className=" w-full h-[500px] rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-contain shadow-2xl"
                src={data.images[activeImageIdx].imagePath}
                alt=""
              />
            </div>
            <div className="flex flex-wrap gap-3 mt-7 mr-[20%] max-w-[60%]">
              {/* TODO DELETE LOOP */}
              {data.images.map((image, index) => (
                <div
                  key={index}
                  className={`w-24 h-24 rounded-xl overflow-hidden shadow-2xl bg-gray-300${
                    activeImage === image.imagePath && "border border-primary"
                  }`}
                  onClick={() => {
                    setActiveImage(image.imagePath);
                  }}
                >
                  <img
                    className="w-full h-full object-contain"
                    src={image.imagePath}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* LG-MD-SM */}
        <div className="lg:hidden flex flex-col rounded-xl w-full bg-gray-100">
          {/* Right section */}
          <section className="flex flex-col justify-between items-center gap-4 rounded-xl w-full p-4">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-bold">{data.name}</h1>
              <h2 className="text-gray-500">{data.brand}</h2>
            </div>

            <div className="flex items-center gap-4">
              <AccentText>{price} ريال</AccentText>
            </div>

            <hr className="w-full" />

            <section className="flex flex-col gap-4 mb-4 rounded-xl w-full h-full">
              <div className="relative w-full h-64 rounded-xl overflow-hidden ">
                <img
                  className="w-full h-full object-contain"
                  src={data.images[activeImageIdx].imagePath}
                  alt=""
                />
                <button
                  className="absolute left-0 w-10 h-10 top-[50%] bg-white rounded-full shadow-3xl"
                  onClick={() => {
                    if (activeImageIdx === data.images.length - 1) {
                      setActiveImageIdx(0);
                    } else {
                      setActiveImageIdx((prev) => (prev += 1));
                    }
                  }}
                >
                  <img
                    src={leftArrowIcon}
                    className="justify-self-center"
                    alt=""
                  />
                </button>
                <button
                  className="absolute right-0 top-[50%] w-10 h-10 bg-white rounded-full shadow-2xl"
                  onClick={() => {
                    if (activeImageIdx === 0) {
                      setActiveImageIdx(data.images.length - 1);
                    } else {
                      setActiveImageIdx((prev) => (prev -= 1));
                    }
                  }}
                >
                  <img
                    src={leftArrowIcon}
                    className="rotate-180 justify-self-center"
                  />
                </button>
              </div>
              <div className="flex flex-wrap justify-center gap-5">
                {/* TODO DELETE LOOP */}
                {data.images.map((image, index) => (
                  <div
                    key={index}
                    // className="w-18 h-10 rounded overflow-hidden"
                    className={`w-24 h-24 rounded-xl overflow-hidden shadow-2xl bg-gray-300 ${
                      activeImageIdx === index && "border border-primary"
                    }`}
                    onClick={() => {
                      setActiveImageIdx(index);
                    }}
                  >
                    <img
                      className="w-full h-full object-contain"
                      src={image.imagePath}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </section>

            <hr className="w-full" />

            <div className="flex flex-col flex-wrap justify-center gap-2 w-full">
              <div className="flex flex-row justify-around">
                <TitleNumber column subTitle={data.color}>
                  اللون
                </TitleNumber>
                <TitleNumber
                  column
                  subTitle={`${data.measurements} ${data.measurementUnit}`}
                >
                  القياس
                </TitleNumber>
              </div>
              <div className="flex flex-row justify-around">
                <TitleNumber column subTitle={data.measurementUnit}>
                  وحدة القياس
                </TitleNumber>
                <TitleNumber column subTitle={data.manufacturingCountry}>
                  بلد التصنيع
                </TitleNumber>
              </div>
            </div>

            <hr className="w-full" />
            {userType === "Client" && (
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={includeInstallation}
                    onChange={(e) => {
                      setPrice(data.price + data.installationTeam);
                      if (e.target.checked) {
                        setIncludeInstallation(true);
                        setPrice(data.price + data.installationTeam);
                      } else {
                        setIncludeInstallation(false);
                        setPrice((prev) => prev - data.installationTeam);
                      }
                    }}
                  />
                  طلب أعمال التركيب (+{data.installationTeam} ر.س)
                </label>
              </div>
            )}
            <div className="w-full max-w-52 flex flex-col gap-4">
              {data.categoryId === 1 && (
                <div
                  onClick={() => {
                    if (!token) {
                      setIsShownLoginModal(true);
                      return;
                    }
                    setIsShownRkahmCustomMeasureModal(true);
                  }}
                  className="w-15 h-15 flex items-center justify-center cursor-pointer"
                >
                  <ButtonGold>طلب قياس مخصص</ButtonGold>
                </div>
              )}
              {data.categoryId !== 1 && (
                <ButtonGold
                  onClick={
                    token ? handleAddToCart : () => setIsShownLoginModal(true)
                  }
                >
                  <div className="flex justify-center gap-2">
                    <img src={addToCartIcon} alt="" />
                    <span>أضف إلى السلة</span>
                  </div>
                </ButtonGold>
              )}

              <button
                onClick={
                  token ? handleRequestSample : () => setIsShownLoginModal(true)
                }
                className="rounded border border-black py-1 bg-white"
              >
                <div className="flex justify-center gap-2 text-black">
                  <img src={addToBoxBlackIcon} alt="" />
                  <span>طلب عينة</span>
                </div>
              </button>
            </div>

            {/* <div className="mt-8">
              <h3 className="font-bold">ملاحظات</h3>
              <h3 className="text-gray-500">ملاحظات مرتبطة بالمنتج</h3>
            </div> */}
          </section>
        </div>
      </>
    );
  } else {
    <span>No data</span>;
  }
};

export default ProductDetailsCard;
