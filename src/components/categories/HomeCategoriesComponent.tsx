import { useRef } from "react";
import { HomeSubCategory } from "../../models/HomeCategories";
import { ButtonGold, CategoryCard, leftArrowIcon, Link } from "../..";
import { useRkhamCustomMeasure } from "../../hooks/useRkhamCustomMeasure";

interface HomeCategoriesComponentProps {
  subCategories: HomeSubCategory[];
  categoryName: string;
  categoryId: number;
}

const HomeCategoriesComponent = ({
  subCategories,
  categoryName,
  categoryId,
}: HomeCategoriesComponentProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { setIsShownRkahmCustomMeasureModal, isShownRkahmCustomMeasureModal } =
    useRkhamCustomMeasure();
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
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          {categoryName}
        </h1>
        <h2 className="text-4xl font-bold text-gray-500 mb-8">
          التصنيفات الفرعية
        </h2>

        {/* Left and Right Arrows - Hidden on Mobile */}
        <div className="absolute z-10 -right-4 top-[65%] flex justify-between w-full">
          <button
            onClick={scrollLeft}
            className="flex items-center justify-center rounded-full w-12 h-12 bg-white shadow-4xl hidden md:flex"
          >
            <img
              className="-scale-x-100"
              src={leftArrowIcon}
              alt="Scroll Left"
            />
          </button>
          <button
            onClick={scrollRight}
            className="flex items-center justify-center rounded-full w-12 h-12 bg-white shadow-xl hidden md:flex"
          >
            <img src={leftArrowIcon} alt="Scroll Right" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar"
        >
          {subCategories.map((sc) => {
            return (
              <Link key={sc.id} to={`/category/${categoryId}/${sc.id}`}>
                <CategoryCard img={sc.imagePath} num="">
                  {sc.name}
                </CategoryCard>
              </Link>
            );
          })}
          {categoryId === 1 && (
            <div
              onClick={() => {
                setIsShownRkahmCustomMeasureModal(true);
                console.log(isShownRkahmCustomMeasureModal);
              }}
              className="w-15 h-15 flex items-center justify-center cursor-pointer"
            >
              <ButtonGold>طلب قياس مخصص</ButtonGold>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeCategoriesComponent;
