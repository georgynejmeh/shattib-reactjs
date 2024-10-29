import {
  shattibLogoRow,
  shattibIcon,
  downArrowIcon,
  searchIcon,
  cartIcon,
  heartIcon,
  accountIcon,
  TextInput,
  ButtonGold,
  Link,
  useEngineerRequest,
} from "..";

const NavBar = () => {
  const { setIsShownEngineerRequestModal } = useEngineerRequest();
  return (
    <nav className="flex items-center justify-evenly border-b py-2">
      <img src={shattibLogoRow} alt="" />
      <Link to={"/home"}>
        <span>الصفحة الرئيسية</span>
      </Link>
      <Link to={"/category"}>
        <button>
          <div className="flex items-center">
            <img src={shattibIcon} alt="" />
            <div className="flex">
              <span className="px-2">التصنيفات</span>
              <div className="w-4 flex justify-center items-center">
                <img className="w-full h-full" src={downArrowIcon} alt="" />
              </div>
            </div>
          </div>
        </button>
      </Link>
      <Link to={"/home"}>
        <span>جميع المنتجات</span>
      </Link>
      <Link to={"/conditions"}>
        <span>كراسات الشروط</span>
      </Link>
      <div className="w-96">
        <TextInput icon={searchIcon} placeholder="البحث عن المنتجات" />
      </div>
      <Link to={"/cart"}>
        <div className="flex flex-col items-center">
          <img src={cartIcon} alt="" />
          <span>السلة</span>
        </div>
      </Link>
      <Link to={"/wishlist"}>
        <div className="flex flex-col items-center">
          <img src={heartIcon} alt="" />
          <span>المفضلة</span>
        </div>
      </Link>
      <div
        onClick={() => {
          setIsShownEngineerRequestModal(true);
        }}
      >
        <ButtonGold>طلب عرض سعر</ButtonGold>
      </div>
      <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
        <img src={accountIcon} alt="" />
      </div>
      <span>EN</span>
    </nav>
  );
};

export default NavBar;
