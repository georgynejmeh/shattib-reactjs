import { useRef, useState } from "react";
import { RoundButton, leftArrowIcon } from "..";
import { Category } from "../models/Category";

interface CategoriesButtonListHorizontalProps {
  categories: Category[] | null;
  selectedCategory: number;
  setSelectedCategory: (val: number) => void;
}

const CategoriesButtonListHorizontal = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}: CategoriesButtonListHorizontalProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [localCategory, setLocalCategory] = useState<number>(selectedCategory);
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
    <div className="relative">
      {/* Left and Right Arrows */}
      {/* <div className="absolute z-10 -right-4 top-2 flex justify-between w-full"> */}
      <button
        onClick={scrollLeft}
        className="absolute flex items-center justify-center rounded-full w-8 h-8 bg-white shadow-md top-2 right-0"
      >
        <img className="-scale-x-100" src={leftArrowIcon} alt="Scroll Left" />
      </button>
      <button
        onClick={scrollRight}
        className="absolute flex items-center justify-center rounded-full w-8 h-8 bg-white shadow-md top-2 left-0"
      >
        <img src={leftArrowIcon} alt="Scroll Right" />
      </button>
      {/* </div> */}

      {/* Scrollable Button List */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto whitespace-nowrap no-scrollbar"
      >
        <RoundButton
          onClick={() => {
            setSelectedCategory(0);
            setLocalCategory(0);
          }}
          active={localCategory === 0}
        >
          كل التصنيفات
        </RoundButton>
        {categories &&
          categories.map((cat) => {
            return (
              <RoundButton
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setLocalCategory(cat.id);
                }}
                active={localCategory === cat.id}
              >
                {cat.name}
              </RoundButton>
            );
          })}
        {/* <RoundButton>الرخام</RoundButton>
        <RoundButton>البورسلان</RoundButton>
        <RoundButton>السيراميك</RoundButton>
        <RoundButton>الباركيه</RoundButton>
        <RoundButton>النوافذ</RoundButton>
        <RoundButton>الديكورات</RoundButton>
        <RoundButton>الأبواب</RoundButton>
        <RoundButton>الصفائح الحجرية</RoundButton>
        <RoundButton>الجبس</RoundButton>
        <RoundButton>الحجر</RoundButton>
        <RoundButton>الدهانات</RoundButton>
        <RoundButton>العوازل</RoundButton>
        <RoundButton>البوابات الإلكترونية</RoundButton>
        <RoundButton>مفاتيح وأفياش</RoundButton>
        <RoundButton>مواد صحية وخزانات</RoundButton>
        <RoundButton>التكييف</RoundButton>
        <RoundButton>الإنارة</RoundButton> */}
      </div>
    </div>
  );
};

export default CategoriesButtonListHorizontal;
