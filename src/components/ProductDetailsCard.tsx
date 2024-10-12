import {
  addToBoxIcon,
  addToCartIcon,
  Button,
  linkIcon,
  priceTagIcon,
  productImg,
  TitleNumber,
  QuantityControls,
  AccentText,
} from ".";

const ProductDetailsCard = () => {
  return (
    <div className="flex rounded-xl h-full w-3/4 bg-gray-100">
      <div className="flex flex-col justify-between gap-4 rounded-xl w-full m-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">طقم شطاف WG 006</h1>
          <h2 className="text-gray-500">طقم شطاف</h2>
        </div>
        <div className="flex items-center gap-4">
          <img src={priceTagIcon} alt="" />
          <AccentText>50 - 70 ريال</AccentText>

          <button>
            <div className="flex items-center gap-2">
              <span className="underline">طلب عرض سعر</span>
              <img className="h-4" src={linkIcon} alt="" />
            </div>
          </button>
        </div>
        <hr />
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
          <TitleNumber size="md" subTitle="حجم موحد">
            الحجم
          </TitleNumber>
          <TitleNumber size="md" subTitle="50 سم">
            الطول
          </TitleNumber>
        </div>
        <hr />
        <div className="flex gap-4">
          <span className="text-lg">الكمية</span>
          <QuantityControls />
        </div>
        <div className="flex flex-col gap-4">
          <Button>
            <div className="flex justify-center gap-2">
              <span>أضف إلى السلة</span>
              <img src={addToCartIcon} alt="" />
            </div>
          </Button>
          <Button>
            <div className="flex justify-center gap-2">
              <span>طلب عينة</span>
              <img src={addToBoxIcon} alt="" />
            </div>
          </Button>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden w-full mt-24 m-8">
        <img className="w-full h-full object-cover" src={productImg} alt="" />
      </div>
    </div>
  );
};

export default ProductDetailsCard;
