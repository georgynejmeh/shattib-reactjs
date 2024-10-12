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
} from ".";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-evenly border-b py-4">
      <img src={shattibLogoRow} alt="" />
      <Link to={"/home"}>
        <span>الصفحة الرئيسية</span>
      </Link>
      <div className="flex">
        <img src={shattibIcon} alt="" />
        <div className="flex">
          <span className="px-2">التصنيفات</span>
          <img src={downArrowIcon} alt="" />
        </div>
      </div>
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
      <div>
        <ButtonGold>طلب عرض سعر</ButtonGold>
      </div>
      <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
        <img src={accountIcon} alt="" />
      </div>
    </nav>
  );
};

export default NavBar;
