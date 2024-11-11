import {
  CategoryCard,
  Link,
  switchesImg01,
  switchesImg02,
  switchesImg03,
  switchesImg04,
  switchesImg05,
  switchesImg06,
  switchesImg07,
  switchesImg08,
  switchesImg09,
  switchesImg10,
  switchesImg11,
  switchesImg12,
  switchesImg13,
  switchesImg14,
  switchesImg15,
  switchesImg16,
  switchesImg17,
} from "../..";

const Switches = () => {
  return (
    <section className="pt-16">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">الديكورات</h1>
        <h2 className="text-4xl font-bold text-gray-500 mb-8">
          التصنيفات الفرعية
        </h2>
        <div className="flex gap-8 overflow-x-auto whitespace-nowrap no-scrollbar">
          <Link to={"/category"}>
            <CategoryCard img={switchesImg01} num="">
              مفتاح تسكيرة
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={switchesImg02} num="">
              مفتاح أحادي
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={switchesImg03} num="">
              مفتاح ثنائي
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={switchesImg04} num="">
              مفتاح ثلاثي
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={switchesImg05} num="">
              مفتاح رباعي
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={switchesImg06} num="">
              مفتاح مكيف
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={switchesImg07} num="">
              مفتاح سخان
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={switchesImg08} num="">
              مفتاح ستارة
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={switchesImg09} num="">
              مفتاح دايمر
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={switchesImg10} num="">
              مفتاح جرس
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={switchesImg11} num="">
              فيش ثلاثي
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={switchesImg12} num="">
              فيش USB و USBc
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={switchesImg13} num="">
              مجرى أفياش
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={switchesImg14} num="">
              أفياش للمجرى
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={switchesImg15} num="">
              فيش تلفون
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={switchesImg16} num="">
              فيش دش
            </CategoryCard>
          </Link>
          <Link to={"/category"}>
            <CategoryCard img={switchesImg17} num="">
              فيش ايثرنت
            </CategoryCard>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Switches;
