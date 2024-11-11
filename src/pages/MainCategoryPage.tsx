import {
  CategoryFilterCard,
  CategoryListHorizontal,
  MainPadding,
  ProductCard,
  ProductsFilterViewControls,
  SectionTitles,
  TitleNumber,
  useApi,
  useEffect,
  useLocation,
  useState,
} from "..";
import { ProductHomePage } from "../models/Product";

interface Props {
  categoryId?: number;
}

const MainCategoryPage = ({ categoryId = 1 }: Props) => {
  const [maxPrice, setMaxPrice] = useState(10000);
  const [minPrice, setMinPrice] = useState(0);
  const { isLoading, error, data } = useApi<ProductHomePage[]>(
    `Products?categoryId=${categoryId}&minPrice=${minPrice}&maxPrice=${maxPrice}`
  );

  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlMinPrice = params.get("minPrice");
    const urlMaxPrice = params.get("maxPrice");
    setMinPrice(parseFloat(urlMinPrice || "0"));
    setMaxPrice(parseFloat(urlMaxPrice || "10000"));
  }, [location.search]);

  return (
    <main>
      <MainPadding>
        <SectionTitles
          title01="الصفحة الرئيسية"
          title02="التصنيفات"
          endTitle="مواد البناء"
        />
        <TitleNumber subTitle="">مواد البناء</TitleNumber>
        <TitleNumber subTitle="">التصنفات الفرعية</TitleNumber>
        <CategoryListHorizontal />
        {/* <LeftRightButtonsCircle /> */}
        <section className="flex max-lg:flex-col max-lg:w-full">
          <div className="max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center">
            <CategoryFilterCard />
          </div>
          <div className="max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center">
            <ProductsFilterViewControls />
            <section className="flex flex-wrap gap-8 max-lg:justify-center">
              {isLoading ? (
                <ProductCard />
              ) : error ? (
                <ProductCard name="حدث خطأ!" />
              ) : data ? (
                data.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={product.mainImagePath}
                    price={product.price}
                  />
                ))
              ) : null}
            </section>
          </div>
        </section>
      </MainPadding>
    </main>
  );
};

export default MainCategoryPage;
