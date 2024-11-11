import {
  CategoryCard,
  Link,
  nwafezImg01,
  nwafezImg02,
  nwafezImg03,
  nwafezImg04,
} from "../..";

const Nwafez = () => {
  return (
    <section className="pt-16">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">النوافذ</h1>
        <h2 className="text-4xl font-bold text-gray-500 mb-8">
          التصنيفات الفرعية
        </h2>
        <div className="flex gap-8 overflow-x-auto whitespace-nowrap no-scrollbar">
          <Link to={"/category"}>
            <CategoryCard img={nwafezImg01} num="">
              نوافذ سحاب
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={nwafezImg02} num="">
              نوافذ مفصلية
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={nwafezImg03} num="">
              نوافذ قلاب
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={nwafezImg04} num="">
              الشتر
            </CategoryCard>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Nwafez;
