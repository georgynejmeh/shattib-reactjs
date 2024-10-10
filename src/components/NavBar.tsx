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
} from ".";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-evenly py-4">
      <img src={shattibLogoRow} alt="" />
      <span>الصفحة الرئيسية</span>
      <div className="flex">
        <img src={shattibIcon} alt="" />
        <div className="flex">
          <span className="px-2">التصنيفات</span>
          <img src={downArrowIcon} alt="" />
        </div>
      </div>
      <div className="w-96">
        <TextInput icon={searchIcon} placeholder="البحث عن المنتجات" />
      </div>
      <div className="flex flex-col items-center">
        <img src={cartIcon} alt="" />
        <span>السلة</span>
      </div>
      <div className="flex flex-col items-center">
        <img src={heartIcon} alt="" />
        <span>المفضلة</span>
      </div>
      <div className="">
        <ButtonGold>طلب عرض سعر</ButtonGold>
      </div>
      <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
        <img src={accountIcon} alt="" />
      </div>
    </nav>
  );
};

export default NavBar;
