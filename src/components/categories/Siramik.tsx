import {
  CategoryCard,
  Link,
  siramikImg01,
  siramikImg02,
  siramikImg03,
  siramikImg04,
} from "../..";

const Siramik = () => {
  return (
    <section className="pt-16">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">السيراميك</h1>
        <h2 className="text-4xl font-bold text-gray-500 mb-8">
          التصنيفات الفرعية
        </h2>
        <div className="flex gap-8 overflow-x-auto whitespace-nowrap no-scrollbar">
          <Link to={"/category"}>
            <CategoryCard img={siramikImg01} num="">
              سيراميك الأرضيات الداخلية
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={siramikImg02} num="">
              سيراميك الجدران
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={siramikImg03} num="">
              سيراميك الحمامات والمطابخ
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={siramikImg04} num="">
              سيراميك الأرضيات خارجي
            </CategoryCard>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Siramik;
