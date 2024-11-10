import {
  CatDropdownItem,
  downArrowIcon,
  Link,
  useEffect,
  useRef,
  useState,
} from "..";

const NavBarCategoriesDropdownMenu = () => {
  const categoriesList = [
    "الرخام",
    "البورسلان",
    "السيراميك",
    "الباركيه",
    "النوافذ",
    "الديكورات",
    "الأبواب",
    "الصفائح الحجرية",
    "الجبس",
    "الحجر",
    "الدهانات",
    "العوازل",
    "البوابات الإلكترونية",
    "مفاتيح وأفياش",
    "مواد صحية وخزانات",
    "التكييف",
    "الإنارة",
  ];
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
              {categoriesList.map((item, index) => (
                <Link
                  onClick={() => setIsCatDropdown(false)}
                  to={"/category"}
                  key={index}
                >
                  <CatDropdownItem>{item}</CatDropdownItem>
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
