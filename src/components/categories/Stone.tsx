import { CategoryCard, Link, stoneImg01, stoneImg02, stoneImg03 } from "../..";

const Stone = () => {
  return (
    <section className="pt-16">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">الرخام</h1>
        <h2 className="text-4xl font-bold text-gray-500 mb-8">حجر الأرضيات</h2>
        <div className="flex gap-8 overflow-x-auto whitespace-nowrap no-scrollbar">
          <Link to={"/category"}>
            <CategoryCard img={stoneImg01} num="">
              جبس مقاوم للرطوبة
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={stoneImg02} num="">
              حجر للجدران
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={stoneImg03} num="">
              حجر للواجهات الخارجية
            </CategoryCard>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Stone;
