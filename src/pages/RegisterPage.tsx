import {
  TextInput,
  personIcon,
  emailIcon,
  phoneIcon,
  lockIcon,
  Button,
  registerBanner,
  Link,
  useApi,
  useState,
  Navigate,
} from "..";

const RegisterPage = () => {
  const userType = localStorage.getItem("userType") || "Client";

  const [passwordCheck, setPasswordCheck] = useState("");
  const [isShownPasswordTooltip, setIsShownPasswordTooltip] = useState(false);

  const { postData, isLoading, error, data } = useApi(
    "Accounts/Register",
    "POST"
  );

  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: userType,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   postData(formData);
  // };

  // Form validation to check if all fields are filled and passwords match
  const isFormValid = () => {
    const { displayName, email, phoneNumber, password } = formData;
    return (
      displayName &&
      email &&
      phoneNumber &&
      password &&
      password.length >= 8 &&
      password === passwordCheck
    );
  };

  return (
    <>
      {data ? <Navigate to={"/login"} /> : null}
      <div className="flex max-lg:flex-col justify-center items-center min-h-screen max-lg:p-8">
        <div className="w-1/4 flex flex-col justify-center max-lg:w-full">
          <span className="text-yellow-600 text-2xl pb-4">
            أهلاً بك في شطّب!
          </span>
          <span className="text-2xl">إنشاء حساب</span>
          <form className="py-4" action="">
            <TextInput
              name="displayName"
              title="الاسم"
              icon={personIcon}
              onChange={handleInputChange}
            />
            <TextInput
              name="email"
              title="البريد الالكتروني"
              icon={emailIcon}
              onChange={handleInputChange}
            />
            <TextInput
              name="phoneNumber"
              title="رقم الهاتف"
              icon={phoneIcon}
              onChange={handleInputChange}
            />
            <div className="relative">
              <TextInput
                name="password"
                password={true}
                title="كلمة المرور"
                icon={lockIcon}
                onChange={handleInputChange}
              />

              <div
                onMouseEnter={() => {
                  if (window.innerWidth >= 1024) {
                    setIsShownPasswordTooltip(true);
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth >= 1024) {
                    setIsShownPasswordTooltip(false);
                  }
                }}
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    setIsShownPasswordTooltip(!isShownPasswordTooltip);
                  }
                }}
                className="absolute top-3 right-20 w-4 h-4 rounded-full border border-black select-none flex items-center justify-center cursor-pointer text-xs"
              >
                i
              </div>

              <div
                className={`absolute right-16 top-9 bg-gray-100 rounded ${
                  isShownPasswordTooltip ? "" : "hidden"
                }`}
              >
                كلمة المرور يجب أن تتكون من 8 محارف على الأقل.
              </div>
            </div>
            <TextInput
              name="passwordConfirm"
              password={true}
              title="تأكيد كلمة المرور"
              icon={lockIcon}
              onChange={(e) => setPasswordCheck(e.target.value)}
              // onChange={handleInputChange}
            />
          </form>
          <div className="flex flex-col items-center">
            <div className="w-full">
              {/* <Link to={"/admin/product/new"}> */}
              <Button
                disabeld={!isFormValid()}
                onClick={() => postData(formData)}
              >
                {isLoading ? "جاري التسجيل..." : "إنشاء حساب"}
              </Button>
              {/* </Link> */}
            </div>
            {error ? (
              <span className="pt-4 text-red-600 font-bold">
                حدث خطأ! الرجاء إعادة المحاولة
              </span>
            ) : null}
            <span className="pt-4">
              لديك حساب؟{" "}
              <Link to={"/login"}>
                <button>
                  <span className="text-yellow-600 underline">
                    تسجيل الدخول
                  </span>
                </button>
              </Link>
            </span>
          </div>
        </div>
        <div className="px-8 max-lg:py-4"></div>
        <div>
          <img src={registerBanner} alt="" />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
