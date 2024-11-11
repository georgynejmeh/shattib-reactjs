import {
  CategoryCard,
  insulationImg01,
  insulationImg02,
  insulationImg03,
  Link,
} from "../..";

const Insulation = () => {
  return (
    <section className="pt-16">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">العوازل</h1>
        <h2 className="text-4xl font-bold text-gray-500 mb-8">
          التصنيفات الفرعية
        </h2>
        <div className="flex gap-8 overflow-x-auto whitespace-nowrap no-scrollbar">
          <Link to={"/category"}>
            <CategoryCard img={insulationImg01} num="">
              بوابات فتح أفقي
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={insulationImg02} num="">
              عوازل صوتية
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={insulationImg03} num="">
              عوازل مائية
            </CategoryCard>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Insulation;
