import {
  bathroomImg01,
  bathroomImg02,
  bathroomImg03,
  bathroomImg04,
  bathroomImg05,
  bathroomImg06,
  bathroomImg07,
  bathroomImg08,
  bathroomImg09,
  bathroomImg10,
  bathroomImg11,
  bathroomImg12,
  CategoryCard,
  Link,
} from "../..";

const Bathroom = () => {
  return (
    <section className="pt-16">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">الديكورات</h1>
        <h2 className="text-4xl font-bold text-gray-500 mb-8">
          التصنيفات الفرعية
        </h2>
        <div className="flex gap-8 overflow-x-auto whitespace-nowrap no-scrollbar">
          <Link to={"/category"}>
            <CategoryCard img={bathroomImg01} num="">
              الخلاطات
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={bathroomImg02} num="">
              كراسي الحمامات والسيفونات
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={bathroomImg03} num="">
              السخانات
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={bathroomImg04} num="">
              أحواض الاستحمام
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={bathroomImg05} num="">
              أنظمة الدش
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={bathroomImg06} num="">
              خارج مياه للدش
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={bathroomImg07} num="">
              الشطافات
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={bathroomImg08} num="">
              لوازم السباكة
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={bathroomImg09} num="">
              لوازم السباكة
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={bathroomImg10} num="">
              مغاسل الحمام
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={bathroomImg11} num="">
              خزانات المياه
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={bathroomImg12} num="">
              ملحقات الحمام
            </CategoryCard>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bathroom;
