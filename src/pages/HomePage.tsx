import {
  shattibText,
  shattibGoldIcon,
  CompaniesBanner,
  ProductListHorizontal,
  TitleNumber,
  CategoriesButtonListHorizontal,
  MainSlideShow,
  BannerButton,
  Rkham,
  Porsalen,
  Siramik,
  Parkeh,
  Nwafez,
  Decors,
  Doors,
  Panels,
  Gypsum,
  Stone,
  Paints,
  Insulation,
  Link,
  AirCondition,
  Switches,
  Bathroom,
} from "..";

const HomePage = () => {
  return (
    <>
      <Link to={"/contact"}>
        <div className="fixed z-50 bottom-4 left-4 w-20 h-20 bg-indigo-950 rounded-full text-white flex items-center justify-center hover:bg-indigo-700">
          تواصل معنا
        </div>
      </Link>
      <div>
        <section className="h-screen">
          <div className="relative h-full pb-32 overflow-hidden">
            <MainSlideShow />
            {/* <video
              className="w-full h-full object-cover"
              src={video01}
              autoPlay
              loop
            /> */}
            <div className="absolute top-0 pt-16 ps-32 flex flex-col gap-8 z-20 max-lg:pt-8 max-lg:ps-8">
              <img className="w-64 max-lg:w-48" src={shattibText} />
              <span className="text-2xl text-white font-bold max-lg:text-lg">
                منصة شاملة لمعاينة وطلب كافة مواد التشطيب النهائي
              </span>
              {/* <p className="text-2xl text-white max-lg:text-sm">
                تسهيل عملية طلب العينات وإتمام عمليات الشراء بطريقة
                <br /> مريحة وفعالة، والتأكد من توفر العينات أو المنتجات
                <br /> المطلوبة قبل إتمام الحجز.
              </p> */}
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center h-screen">
          <div className="absolute -z-10 h-48 w-full" />
          <BannerButton />
        </section>

        {/* <section className="flex items-center justify-center h-screen">
          <div className="relative w-full h-2/3 overflow-hidden">
            <div className="absolute flex flex-col justify-center gap-8 ps-16 z-10 w-full h-full bg-black bg-opacity-50">
              <span className="text-4xl text-white font-bold">
                "احصل على استشارة احترافية من مهندسين ذوي خبرة
                <br /> لرفع مساحة مشاريعك . اطلب استشارتك الآن وحقق
                <br /> رؤيتك بدعم من الخبراء."
              </span>
              <div className="w-44">
                <ButtonGold>طلب رفع مساحة</ButtonGold>
              </div>
            </div>
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              src={video02}
            ></video>
          </div>
        </section> */}

        <section className="p-8">
          <div className="flex items-center mb-4">
            <img className="me-2" src={shattibGoldIcon} alt="" />
            {/* <div className="me-2 h-16 w-2 bg-yellow-200" /> */}
            <TitleNumber subTitle="">التصنيفات</TitleNumber>
          </div>

          <CategoriesButtonListHorizontal />

          {/* CATEGORIES HORIZONTAL LIST */}
          <Rkham />

          <div className="flex items-center justify-between py-8">
            <TitleNumber version={2} subTitle="">
              المتنجات
            </TitleNumber>
            {/* <div className="flex">
              <span className="p-4">عرض الكل</span>
              <img src={doubleLeftArrowIcon} alt="" />
            </div> */}
          </div>
          <ProductListHorizontal />
          {/* <LeftRightButtonsCircle /> */}

          <Porsalen />
          <Siramik />
          <Parkeh />
          <Nwafez />
          <Decors />
          <Doors />
          <Panels />
          <Gypsum />
          <Stone />
          <Paints />
          <Insulation />
          <AirCondition />
          <Switches />
          <Bathroom />
        </section>

        {/* 
        <section className="p-8">
          <TitleNumber version={2} subTitle="">
            التصنيفات الفرعية
          </TitleNumber>
          <CategoryListHorizontal />
          <LeftRightButtonsCircle />
        </section> */}
        {/* <div className="flex flex-row-reverse pe-8">
          <img src={doubleLeftArrowIcon} alt="" /> 
          <span className="p-4">عرض جميع التصنيفات</span>
        </div> */}

        <CompaniesBanner />
      </div>
    </>
  );
};

export default HomePage;
