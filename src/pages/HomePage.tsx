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
  useApi,
  useState,
} from "..";
import { Category } from "../models/Category";
import { HomeCategorie } from "../models/HomeCategories";

const HomePage = () => {
  const { data: categories } = useApi<Category[]>(
    "SeededValues/Categories",
    "GET"
  );
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const { data: homeCategories } = useApi<HomeCategorie[]>(
    `CatsSubCatsProducts?categoryId=${selectedCategory}`,
    "GET",
    undefined,
    undefined,
    [selectedCategory]
  );
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

            <div className="absolute top-0 pt-16 ps-32 flex flex-col gap-8 z-20 max-lg:pt-8 max-lg:ps-8">
              <img className="w-64 max-lg:w-48" src={shattibText} />
              <span className="text-2xl text-white font-bold max-lg:text-lg">
                منصة شاملة لمعاينة وطلب كافة مواد التشطيب النهائي
              </span>
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center h-screen">
          <div className="absolute -z-10 h-48 w-full" />
          <BannerButton />
        </section>

        <section className="p-8">
          <div className="flex items-center mb-4">
            <img className="me-2" src={shattibGoldIcon} alt="" />
            {/* <div className="me-2 h-16 w-2 bg-yellow-200" /> */}
            <TitleNumber subTitle="">التصنيفات</TitleNumber>
          </div>

          <CategoriesButtonListHorizontal
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {/* CATEGORIES HORIZONTAL LIST */}
          <Rkham />

          <div className="flex items-center justify-between py-8">
            <TitleNumber version={2} subTitle="">
              المنتجات
            </TitleNumber>
          </div>
          <ProductListHorizontal />

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
