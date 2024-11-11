import { CategoryCard, decorsImg01, Link } from "../..";

const Decors = () => {
  return (
    <section className="pt-16">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">الديكورات</h1>
        <h2 className="text-4xl font-bold text-gray-500 mb-8">
          التصنيفات الفرعية
        </h2>
        <div className="flex gap-8 overflow-x-auto whitespace-nowrap no-scrollbar">
          <Link to={"/category"}>
            <CategoryCard img={decorsImg01} num="">
              القفاري
            </CategoryCard>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Decors;
