import { useRef } from "react";
import { RoundButton, leftArrowIcon } from "..";

const CategoriesButtonListHorizontal = () => {
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
    <div className="relative">
      {/* Left and Right Arrows */}
      <div className="absolute z-10 -right-4 top-2 flex justify-between w-full">
        <button
          onClick={scrollLeft}
          className="flex items-center justify-center rounded-full w-8 h-8 bg-white shadow-md"
        >
          <img className="-scale-x-100" src={leftArrowIcon} alt="Scroll Left" />
        </button>
        <button
          onClick={scrollRight}
          className="flex items-center justify-center rounded-full w-8 h-8 bg-white shadow-md"
        >
          <img src={leftArrowIcon} alt="Scroll Right" />
        </button>
      </div>

      {/* Scrollable Button List */}
      <div
        ref={scrollContainerRef}
        className=" overflow-x-auto whitespace-nowrap no-scrollbar"
      >
        <RoundButton active>كل التصنيفات</RoundButton>
        <RoundButton>الرخام</RoundButton>
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
        <RoundButton>الإنارة</RoundButton>
      </div>
    </div>
  );
};

export default CategoriesButtonListHorizontal;
