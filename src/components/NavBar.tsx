import { useNavigate } from "react-router-dom";
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
import { useLoginModal } from "../hooks/useLoginModal";

const NavBar = () => {
  const userType = localStorage.getItem("userType") || "Client";
  const token = localStorage.getItem("accessToken");
  const [searchValue, setSearchValue] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { setIsShownLoginModal } = useLoginModal();
  const navigate = useNavigate();
  const handleAuthorizedNavigationButton = (path: string) => {
    if (token) {
      return navigate(path);
    }
    setIsShownLoginModal(true);
  };
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
          <Link to={"/home"}>
            <img src={shattibLogoRow} alt="" />
          </Link>
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
            <TextInput
              bordered
              icon={searchIcon}
              iconLink={`/search?search=${searchValue}`}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="البحث عن المنتجات"
            />
          </div>

          <div
            onClick={() => handleAuthorizedNavigationButton("/cart")}
            className="relative flex flex-col items-center"
          >
            {/* <div className="absolute -top-2 -right-3 px-2 bg-primary text-white rounded-full">
            {cartItemCount}
          </div> */}
            <img src={cartIcon} alt="" />
            <span>السلة</span>
          </div>

          <div
            onClick={() => handleAuthorizedNavigationButton("/wishlist")}
            className="flex flex-col items-center"
          >
            <img src={heartIcon} alt="" />
            <span>المفضلة</span>
          </div>

          {/* <div
        onClick={() => {
          setIsShownEngineerRequestModal(true);
        }}
      >
        <ButtonGold>طلب عرض سعر</ButtonGold>
      </div> */}
          {token && (
            <div className="flex items-center justify-center w-12 h-12 rounded-full">
              {/* <img src={accountIcon} alt="" /> */}
              <NavBarAccountDropDown />
            </div>
          )}
          <span>EN</span>
        </nav>
      </div>

      <div className="lg:hidden">
        <nav className="flex flex-col justify-between border-b items-start p-8 gap-8">
          <div className="flex justify-between w-full">
            <Link to={"/home"}>
              <img src={shattibLogoRow} alt="" />
            </Link>
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
              <TextInput
                bordered
                iconLink={`/search?search=${searchValue}`}
                onChange={(e) => setSearchValue(e.target.value)}
                icon={searchIcon}
                placeholder="البحث عن المنتجات"
              />
            </div>
            <div className="lg:hidden flex items-center justify-between w-full gap-12">
              <div
                onClick={() => handleAuthorizedNavigationButton("/cart")}
                className="relative flex flex-col items-center"
              >
                {/* <div className="absolute -top-2 -right-3 px-2 bg-primary text-white rounded-full">
            {cartItemCount}
            </div> */}
                <img src={cartIcon} alt="" />
                <span>السلة</span>
              </div>

              <div
                onClick={() => handleAuthorizedNavigationButton("/wishlist")}
                className="flex flex-col items-center"
              >
                <img src={heartIcon} alt="" />
                <span>المفضلة</span>
              </div>

              {/* <div
        onClick={() => {
          setIsShownEngineerRequestModal(true);
          }}
          >
          <ButtonGold>طلب عرض سعر</ButtonGold>
          </div> */}
              {token && (
                <div className="flex items-center justify-center w-12 h-12 rounded-full">
                  {/* <img src={accountIcon} alt="" /> */}
                  <NavBarAccountDropDown />
                </div>
              )}
              <span>EN</span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
