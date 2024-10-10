import {
  SalesSlideShow,
  shattibText,
  shattibGoldIcon,
  RoundButton,
  ProductCard,
  video01,
  video02,
  categoryImg01,
  categoryImg02,
  categoryImg03,
  CompaniesBanner,
  ButtonGold,
  doubleLeftArrowIcon,
  leftArrowCircleIcon,
  rightArrowCircleIcon,
  CategoryCard,
} from ".";

const HomePage = () => {
  return (
    <>
      <div>
        <section className="h-screen">
          <div className="relative h-full overflow-hidden">
            <video src={video01} autoPlay loop />
            <div className="absolute top-0 pt-32 ps-32 flex flex-col gap-8 w-full h-full bg-black bg-opacity-50">
              <img className="w-64" src={shattibText} />
              <span className="text-2xl text-white font-bold">
                منصة شاملة لطلب مواد التشطيب بسهولة وسرعة
              </span>
              <p className="text-2xl text-white">
                تسهيل عملية طلب العينات وإتمام عمليات الشراء بطريقة
                <br /> مريحة وفعالة، والتأكد من توفر العينات أو المنتجات
                <br /> المطلوبة قبل إتمام الحجز.
              </p>
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center h-screen">
          <div className="absolute -z-10 h-48 w-full bg-amber-100" />
          <SalesSlideShow />
        </section>
        <section className="flex items-center justify-center h-screen">
          <div className="relative h-2/3 overflow-hidden">
            <div className="absolute flex flex-col justify-center gap-8 ps-16 z-10 w-full h-full bg-black bg-opacity-50">
              <span className="text-4xl text-white font-bold">
                "احصل على استشارة احترافية من مهندسين ذوي خبرة
                <br /> لرفع مساحة مشاريعك . اطلب استشارتك الآن وحقق
                <br /> رؤيتك بدعم من الخبراء."
              </span>
              <div className="w-44">
                <ButtonGold>طلب رفع مساحة </ButtonGold>
              </div>
            </div>
            <video autoPlay loop src={video02}></video>
          </div>
        </section>
        <section className="p-8">
          <div className="flex items-center mb-4">
            <img className="me-2" src={shattibGoldIcon} alt="" />
            <div className="me-2 h-16 w-2 bg-yellow-200" />
            <span>
              التصنيفات <span className="text-gray-500">17</span>
            </span>
          </div>
          <div>
            <RoundButton>كل التصنيفات</RoundButton>
            <RoundButton>مواد البناء</RoundButton>
            <RoundButton>الإضاءة</RoundButton>
            <RoundButton>الحياة الذكية</RoundButton>
            <RoundButton>الأدوات الصحية</RoundButton>
            <RoundButton>حلول البناء</RoundButton>
          </div>
          <div className="flex items-center justify-between py-8">
            <h1 className="flex gap-4 text-2xl">
              مواد البناء <span className="text-gray-500">500 منتج</span>
            </h1>
            <div className="flex">
              <span className="p-4">عرض الكل</span>
              <img src={doubleLeftArrowIcon} alt="" />
            </div>
          </div>
          <div className="inline-flex py-4 gap-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="flex justify-end gap-2 p-8">
            <button>
              <img src={rightArrowCircleIcon} alt="" />
            </button>
            <button>
              <img src={leftArrowCircleIcon} alt="" />
            </button>
          </div>
        </section>
        <section className="p-8">
          <div className="flex items-center justify-between py-8">
            <h1 className="flex gap-4 text-2xl">
              التصنيفات الفرعية <span className="text-gray-500">20</span>
            </h1>
          </div>
          <div className="inline-flex py-4 gap-8">
            <CategoryCard img={categoryImg01} num="8">
              ألواح خشبية
            </CategoryCard>
            <CategoryCard img={categoryImg02} num="8">
              الغراء والترويبة
            </CategoryCard>
            <CategoryCard img={categoryImg03} num="8">
              السيليكون واللواصق
            </CategoryCard>
            <CategoryCard img={categoryImg01} num="8">
              ألواح خشبية
            </CategoryCard>
            <CategoryCard img={categoryImg02} num="8">
              الغراء والترويبة
            </CategoryCard>
            <CategoryCard img={categoryImg03} num="8">
              السيليكون واللواصق
            </CategoryCard>
          </div>
          <div className="flex justify-end gap-2 p-8">
            <button>
              <img src={rightArrowCircleIcon} alt="" />
            </button>
            <button>
              <img src={leftArrowCircleIcon} alt="" />
            </button>
          </div>
        </section>
        <div className="flex flex-row-reverse pe-8">
          <img src={doubleLeftArrowIcon} alt="" />
          <span className="p-4">عرض جميع التصنيفات</span>
        </div>
        <CompaniesBanner />
      </div>
    </>
  );
};

export default HomePage;
