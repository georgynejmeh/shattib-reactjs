import {
  CatDropdownItem,
  downArrowIcon,
  Link,
  useEffect,
  useRef,
  useState,
} from "..";
import { categories } from "../assets/json/categories";

const NavBarCategoriesDropdownMenu = () => {
  // const { data } = useApi<{ id: number; name: string }[]>(
  //   "SeededValues/Categories"
  // );

  // const categoriesList = [
  //   "الرخام",
  //   "البورسلان",
  //   "السيراميك",
  //   "الباركيه",
  //   "النوافذ",
  //   "الديكورات",
  //   "الأبواب",
  //   "الصفائح الحجرية",
  //   "الجبس",
  //   "الحجر",
  //   "الدهانات",
  //   "العوازل",
  //   "البوابات الإلكترونية",
  //   "مفاتيح وأفياش",
  //   "مواد صحية وخزانات",
  //   "التكييف",
  //   "الإنارة",
  // ];
  const [isCatDropdown, setIsCatDropdown] = useState(false);
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

    const isSmallScreen = window.innerWidth <= 1024; // Max screen size for 'lg' in Tailwind (1024px)

    if (!isSmallScreen) {
      // Add the scroll event listener only if the screen size is 'lg' or smaller
      window.addEventListener("scroll", handleScroll);
    }

    // Clean up the event listener on unmount or when screen size changes
    return () => {
      if (isSmallScreen) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isCatDropdown]);

  // window.addEventListener("scroll", () => {
  //   if (isCatDropdown) setIsCatDropdown(false);
  // });
  // window.addEventListener("click", () => setIsCatDropdown(false));

  return (
    <button>
      <div ref={buttonRef} className="relative flex items-center">
        {/* <img src={shattibIcon} alt="" /> */}
        <div
          onMouseEnter={() => setIsCatDropdown(true)}
          onClick={() => setIsCatDropdown((prev) => !prev)}
          className="flex items-center"
        >
          <span className="px-2">التصنيفات</span>
          <img className="w-4" src={downArrowIcon} alt="" />
        </div>
        {isCatDropdown ? (
          <div className="fixed z-50 top-16 h-screen max-lg:absolute max-lg:top-6">
            <div className="flex flex-col flex-wrap h-1/2 bg-white max-lg:flex-nowrap max-lg:min-h-max max-lg:shadow">
              {categories.map((item, index) => (
                <Link
                  onClick={() => setIsCatDropdown(false)}
                  to={`/category/${item.id}/1`}
                  key={index}
                >
                  <CatDropdownItem>{item.name}</CatDropdownItem>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </button>
  );
};

export default NavBarCategoriesDropdownMenu;
