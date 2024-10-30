import {
  addToBoxIcon,
  addToCartIcon,
  productImg,
  TitleNumber,
  QuantityControls,
  AccentText,
  ButtonGold,
  heartIcon,
} from "..";

const ProductDetailsCard = () => {
  // TODO DELETE
  const temp = [1, 2, 3, 4, 5];
  return (
    <div className="flex rounded-xl w-5/6 bg-gray-100">
      {/* Right section */}
      <section className="flex flex-col justify-between items-start gap-4 rounded-xl w-3/4 m-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">طقم شطاف WG 006</h1>
          <h2 className="text-gray-500">طقم شطاف</h2>
        </div>
        <div className="flex items-center gap-4">
          <AccentText>50 ريال</AccentText>
          {/* <img src={priceTagIcon} alt="" />
          <AccentText>50 - 70 ريال</AccentText> */}

          {/* <Link to={"/price-request"}>
            <button>
              <div className="flex items-center gap-2">
                <span className="underline">طلب عرض سعر</span>
                <img className="h-4" src={linkIcon} alt="" />
              </div>
            </button>
          </Link> */}
        </div>

        <hr className="w-full" />

        <div>
          <TitleNumber size="md" subTitle="رصاصي">
            اللون
          </TitleNumber>
          <div className="flex gap-4 py-4">
            <button>
              <div className="h-20 w-16 rounded overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={productImg}
                  alt=""
                />
              </div>
            </button>
            <button>
              <div className="relative h-20 w-16 rounded overflow-hidden">
                <div className="absolute h-full w-full bg-red-900 bg-opacity-50" />
                <img
                  className="h-full w-full object-cover"
                  src={productImg}
                  alt=""
                />
              </div>
            </button>
            <button>
              <div className="relative h-20 w-16 rounded overflow-hidden">
                <div className="absolute h-full w-full bg-green-900 bg-opacity-50" />

                <img
                  className="h-full w-full object-cover"
                  src={productImg}
                  alt=""
                />
              </div>
            </button>
            <button>
              <div className="relative h-20 w-16 rounded overflow-hidden">
                <div className="absolute h-full w-full bg-yellow-900 bg-opacity-50" />

                <img
                  className="h-full w-full object-cover"
                  src={productImg}
                  alt=""
                />
              </div>
            </button>
          </div>

          <div className="flex justify-around">
            <TitleNumber column subTitle="50 سم">
              القياس
            </TitleNumber>
            <TitleNumber column subTitle="إيطاليا">
              بلد التصنيع
            </TitleNumber>
            <TitleNumber column subTitle="3 سنوات">
              الضمان
            </TitleNumber>
          </div>
          {/* <TitleNumber size="md" subTitle="حجم موحد">
            الحجم
          </TitleNumber>
          <TitleNumber size="md" subTitle="50 سم">
            الطول
          </TitleNumber> */}
        </div>

        <hr className="w-full" />

        <div className="flex gap-4 w-52">
          <span className="text-lg">الكمية</span>
          <QuantityControls />
        </div>
        <div className="w-80 flex flex-col gap-4">
          <ButtonGold>
            <div className="flex justify-center gap-2">
              <img src={addToCartIcon} alt="" />
              <span>أضف إلى السلة</span>
            </div>
          </ButtonGold>
          {/* <Button>
            <div className="flex justify-center gap-2">
              <span>أضف إلى السلة</span>
              <img src={addToCartIcon} alt="" />
            </div>
          </Button> */}
          <button className="rounded border border-black py-1 bg-white">
            <div className="flex justify-center gap-2 text-black">
              <img src={addToBoxIcon} alt="" />
              <span>طلب عينة</span>
            </div>
          </button>
        </div>

        <div className="mt-8">
          <h3 className="font-bold">ملاحظات</h3>
          <h3 className="text-gray-500">ملاحظات مرتبطة بالمنتج</h3>
        </div>
      </section>

      {/* Left section */}
      <section className="flex flex-col gap-4 rounded-xl w-full m-8">
        <div className="relative w-full h-2/3 rounded-xl overflow-hidden">
          <img className="w-full h-full object-cover" src={productImg} alt="" />
          <button>
            <div className="absolute top-0 m-2 flex items-center justify-center h-12 w-12 rounded-full bg-white transition-all duration-700 hover:bg-red-200">
              <img src={heartIcon} alt="" />
            </div>
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          {/* TODO DELETE LOOP */}
          {temp.map(() => (
            <div className="w-24 h-16 rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={productImg}
                alt=""
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsCard;
