import { useTranslation } from "react-i18next";
import {
  CatDropdownItem,
  downArrowIcon,
  Link,
  useState,
  useRef,
  useEffect,
} from "..";
import { categories } from "../assets/json/categories";
import { subCategories } from "../assets/json/subCategories"; // Assuming you import subCategories here

const NavBarCategoriesDropdownMenu = () => {
  const [isCatDropdown, setIsCatDropdown] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsCatDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isCatDropdown) setIsCatDropdown(false);
    };

    const isSmallScreen = window.innerWidth <= 1024; // Tailwind's lg breakpoint
    if (!isSmallScreen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (isSmallScreen) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isCatDropdown]);

  // Get subcategories for the active category
  const getSubcategoriesByCategoryId = (categoryId: number) => {
    return subCategories.filter((sub) => sub.categoryId === categoryId);
  };
  const { t } = useTranslation();
  return (
    <button>
      <div ref={buttonRef} className="relative flex items-center">
        <div
          onMouseEnter={() => setIsCatDropdown(true)}
          onClick={() => setIsCatDropdown((prev) => !prev)}
          className="flex items-center"
        >
          <span className="px-2">{t("categoriesTxt")}</span>
          <img className="w-4" src={downArrowIcon} alt="Dropdown" />
        </div>

        {isCatDropdown && (
          <div className="fixed z-50 top-16 lg:h-screen max-lg:absolute max-lg:top-6 max-lg:min-h-max">
            <div
              onMouseLeave={() => setIsCatDropdown(false)}
              className="flex flex-col flex-wrap h-1/2 bg-white max-lg:flex-nowrap max-lg:min-h-max max-lg:shadow"
            >
              {categories.map((category) => (
                <div
                  key={category.id}
                  onMouseEnter={() => setActiveCategoryId(category.id)} // Set active category on hover
                  onMouseLeave={() => setActiveCategoryId(null)} // Remove active category when not hovered
                >
                  <Link
                    to={`/category/${category.id}/0`}
                    onClick={() => setIsCatDropdown(false)}
                  >
                    <CatDropdownItem>{category.name}</CatDropdownItem>
                  </Link>

                  {/* Show subcategories when hovering over a category */}
                  {activeCategoryId === category.id && (
                    <div className="fixed lg:max-w-1/3 ">
                      <div className="lg:max-h-max min-h-max lg:max-w-96 bg-gray-100 p-2 flex flex-wrap">
                        {getSubcategoriesByCategoryId(category.id).map(
                          (subCategory) => (
                            <Link
                              key={subCategory.id}
                              to={`/category/${category.id}/${subCategory.id}`}
                              onClick={() => setIsCatDropdown(false)} // Close dropdown after selecting subcategory
                            >
                              <CatDropdownItem showLeftIcon={false}>
                                {subCategory.name}
                              </CatDropdownItem>
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </button>
  );
};

export default NavBarCategoriesDropdownMenu;
