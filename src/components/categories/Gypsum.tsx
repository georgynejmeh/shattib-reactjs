import { CategoryCard, gypsumImg01, gypsumImg02, Link } from "../..";

const Gypsum = () => {
  return (
    <section className="pt-16">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">الجبس</h1>
        <h2 className="text-4xl font-bold text-gray-500 mb-8">
          التصنيفات الفرعية
        </h2>
        <div className="flex gap-8 overflow-x-auto whitespace-nowrap no-scrollbar">
          <Link to={"/category"}>
            <CategoryCard img={gypsumImg01} num="">
              جبس مقاوم للرطوبة
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={gypsumImg02} num="">
              جبس للأسقف
            </CategoryCard>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gypsum;
