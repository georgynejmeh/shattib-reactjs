import {
  shattibLogoRow,
  searchIcon,
  cartIcon,
  heartIcon,
  TextInput,
  Link,
  NavBarCategoriesDropdownMenu,
  useState,
  menuIcon,
  NavBarAccountDropDown,
} from "..";

const NavBar = () => {
  const userType = localStorage.getItem("userType") || "Client";

  const [isCollapsed, setIsCollapsed] = useState(true);
  // const [cartItemCount, setCartItemCount] = useState<number>(0);

  // // Function to update cart item count from localStorage
  // const updateCartItemCount = () => {
  //   const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
  //   const totalItems = currentCart.reduce(
  //     (total: number, item: { quantity: number }) => total + item.quantity,
  //     0
  //   );
  //   setCartItemCount(totalItems);
  // };

  // // Call updateCartItemCount when the component mounts
  // useEffect(() => {
  //   updateCartItemCount();
  // }, []);

  // const { setIsShownEngineerRequestModal } = useEngineerRequest();
  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-white max-lg:hidden">
        <nav className="flex items-center justify-between border-b py-4 px-8">
          <img src={shattibLogoRow} alt="" />
          <Link to={"/home"}>
            <span>الصفحة الرئيسية</span>
          </Link>
          <NavBarCategoriesDropdownMenu />
          {/* <Link to={"/home"}>
        <span>جميع المنتجات</span>
      </Link> */}
          <Link
            className={userType === "Client" ? "hidden" : ""}
            to={"/conditions"}
          >
            <span>كراسات الشروط</span>
          </Link>
          <div className="w-96">
            <TextInput icon={searchIcon} placeholder="البحث عن المنتجات" />
          </div>
          <Link to={"/cart"}>
            <div className="relative flex flex-col items-center">
              {/* <div className="absolute -top-2 -right-3 px-2 bg-primary text-white rounded-full">
            {cartItemCount}
          </div> */}
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
          {/* <div
        onClick={() => {
          setIsShownEngineerRequestModal(true);
        }}
      >
        <ButtonGold>طلب عرض سعر</ButtonGold>
      </div> */}
          <div className="flex items-center justify-center w-12 h-12 rounded-full">
            {/* <img src={accountIcon} alt="" /> */}
            <NavBarAccountDropDown />
          </div>
          <span>EN</span>
        </nav>
      </div>

      <div className="lg:hidden">
        <nav className="flex flex-col justify-between border-b items-start p-8 gap-8">
          <div className="flex justify-between w-full">
            <img src={shattibLogoRow} alt="" />
            <button onClick={() => setIsCollapsed(!isCollapsed)}>
              <img src={menuIcon} alt="" />
            </button>
          </div>
          <div className={`flex flex-col gap-6 ${isCollapsed ? "hidden" : ""}`}>
            <Link to={"/home"}>
              <span>الصفحة الرئيسية</span>
            </Link>
            <NavBarCategoriesDropdownMenu />
            {/* <Link to={"/home"}>
        <span>جميع المنتجات</span>
      </Link> */}
            <Link
              className={userType === "Client" ? "hidden" : ""}
              to={"/conditions"}
            >
              <span>كراسات الشروط</span>
            </Link>
            <div className="w-96 max-lg:w-full max-lg:max-w-72">
              <TextInput icon={searchIcon} placeholder="البحث عن المنتجات" />
            </div>
            <div className="lg:hidden flex items-center justify-between w-full gap-12">
              <Link to={"/cart"}>
                <div className="relative flex flex-col items-center">
                  {/* <div className="absolute -top-2 -right-3 px-2 bg-primary text-white rounded-full">
            {cartItemCount}
            </div> */}
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
              {/* <div
        onClick={() => {
          setIsShownEngineerRequestModal(true);
          }}
          >
          <ButtonGold>طلب عرض سعر</ButtonGold>
          </div> */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full">
                {/* <img src={accountIcon} alt="" /> */}
                <NavBarAccountDropDown />
              </div>
              <span>EN</span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
