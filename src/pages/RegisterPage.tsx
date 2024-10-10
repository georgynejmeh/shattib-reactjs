import {
  TextInput,
  personIcon,
  emailIcon,
  phoneIcon,
  lockIcon,
  Button,
  registerBanner,
  Link,
} from "./index";

const RegisterPage = () => {
  return (
    <>
      <div className="flex max-md:flex-col justify-center items-center min-h-screen">
        <div className="w-1/4 max-md:w-1/2 flex flex-col justify-center">
          <span className="text-yellow-600 text-2xl pb-4">
            أهلاً بك في شطّب!
          </span>
          <span className="text-2xl">أنشاء حساب</span>
          <form className="py-4" action="">
            <TextInput title="الاسم" icon={personIcon} />
            <TextInput title="البريد الالكتروني" icon={emailIcon} />
            <TextInput title="رقم الهاتف" icon={phoneIcon} />
            <TextInput password={true} title="كلمة المرور" icon={lockIcon} />
            <TextInput
              password={true}
              title="تأكيد كلمة المرور"
              icon={lockIcon}
            />
          </form>
          <div className="flex flex-col items-center">
            <Button>إنشاء حساب</Button>
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
        <div className="px-8"></div>
        <div>
          <img src={registerBanner} alt="" />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
