import { useRef } from "react";
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
  leftArrowIcon,
} from "../..";
import { switchesSubCategories } from "../../assets/json/switchesSubCategories";

const Switches = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <section className="pt-16 relative">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">مفاتيح وأفياش</h1>
        <h2 className="text-4xl font-bold text-gray-500 mb-8">
          التصنيفات الفرعية
        </h2>

        {/* Left and Right Arrows */}
        <div className="absolute z-10 -right-4 top-[65%] flex justify-between w-full">
          <button
            onClick={scrollLeft}
            className="flex items-center justify-center rounded-full w-12 h-12 bg-white shadow-4xl"
          >
            <img
              className="-scale-x-100"
              src={leftArrowIcon}
              alt="Scroll Left"
            />
          </button>
          <button
            onClick={scrollRight}
            className="flex items-center justify-center rounded-full w-12 h-12 bg-white shadow-xl"
          >
            <img src={leftArrowIcon} alt="Scroll Right" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar"
        >
          <Link
            to={`/category/${switchesSubCategories[0].categoryId}/${switchesSubCategories[0].id}`}
          >
            <CategoryCard img={switchesImg01} num="">
              مفتاح تسكيرة
            </CategoryCard>
          </Link>
          <Link
            to={`/category/${switchesSubCategories[0].categoryId}/${switchesSubCategories[1].id}`}
          >
            <CategoryCard img={switchesImg02} num="">
              مفتاح أحادي
            </CategoryCard>
          </Link>
          <Link
            to={`/category/${switchesSubCategories[0].categoryId}/${switchesSubCategories[2].id}`}
          >
            <CategoryCard img={switchesImg03} num="">
              مفتاح ثنائي
            </CategoryCard>
          </Link>
          <Link
            to={`/category/${switchesSubCategories[0].categoryId}/${switchesSubCategories[3].id}`}
          >
            <CategoryCard img={switchesImg04} num="">
              مفتاح ثلاثي
            </CategoryCard>
          </Link>
          <Link
            to={`/category/${switchesSubCategories[0].categoryId}/${switchesSubCategories[4].id}`}
          >
            <CategoryCard img={switchesImg05} num="">
              مفتاح رباعي
            </CategoryCard>
          </Link>
          <Link
            to={`/category/${switchesSubCategories[0].categoryId}/${switchesSubCategories[5].id}`}
          >
            <CategoryCard img={switchesImg06} num="">
              مفتاح مكيف
            </CategoryCard>
          </Link>
          <Link
            to={`/category/${switchesSubCategories[0].categoryId}/${switchesSubCategories[6].id}`}
          >
            <CategoryCard img={switchesImg07} num="">
              مفتاح سخان
            </CategoryCard>
          </Link>
          <Link
            to={`/category/${switchesSubCategories[0].categoryId}/${switchesSubCategories[7].id}`}
          >
            <CategoryCard img={switchesImg08} num="">
              مفتاح ستارة
            </CategoryCard>
          </Link>
          <Link
            to={`/category/${switchesSubCategories[0].categoryId}/${switchesSubCategories[8].id}`}
          >
            <CategoryCard img={switchesImg09} num="">
              مفتاح دايمر
            </CategoryCard>
          </Link>
          <Link
            to={`/category/${switchesSubCategories[0].categoryId}/${switchesSubCategories[9].id}`}
          >
            <CategoryCard img={switchesImg10} num="">
              مفتاح جرس
            </CategoryCard>
          </Link>
          <Link
            to={`/category/${switchesSubCategories[0].categoryId}/${switchesSubCategories[10].id}`}
          >
            <CategoryCard img={switchesImg11} num="">
              فيش ثلاثي
            </CategoryCard>
          </Link>
          <Link
            to={`/category/${switchesSubCategories[0].categoryId}/${switchesSubCategories[11].id}`}
          >
            <CategoryCard img={switchesImg12} num="">
              فيش USB و USBc
            </CategoryCard>
          </Link>
          <Link
            to={`/category/${switchesSubCategories[0].categoryId}/${switchesSubCategories[12].id}`}
          >
            <CategoryCard img={switchesImg13} num="">
              مجرى أفياش
            </CategoryCard>
          </Link>
          <Link
            to={`/category/${switchesSubCategories[0].categoryId}/${switchesSubCategories[13].id}`}
          >
            <CategoryCard img={switchesImg14} num="">
              أفياش للمجرى
            </CategoryCard>
          </Link>
          <Link
            to={`/category/${switchesSubCategories[0].categoryId}/${switchesSubCategories[14].id}`}
          >
            <CategoryCard img={switchesImg15} num="">
              فيش تلفون
            </CategoryCard>
          </Link>
          <Link
            to={`/category/${switchesSubCategories[0].categoryId}/${switchesSubCategories[15].id}`}
          >
            <CategoryCard img={switchesImg16} num="">
              فيش دش
            </CategoryCard>
          </Link>
          <Link
            to={`/category/${switchesSubCategories[0].categoryId}/${switchesSubCategories[16].id}`}
          >
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
