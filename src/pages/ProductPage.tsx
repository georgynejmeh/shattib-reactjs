import {
  ProductListHorizontal,
  ProductDetailsCard,
  LeftRightButtonsCircle,
} from ".";

const ProductPage = () => {
  return (
    <main className="px-24">
      <div className="flex gap-2 ms-8 mt-8">
        <button>
          <span className="text-gray-500">الأدوات الصحية</span>
        </button>
        <span className="text-gray-500">&gt;</span>
        <button>
          <span className="text-gray-500">طقم شطاف</span>
        </button>
        <span className="text-gray-500">&gt;</span>
        <span className="font-bold">طقم شطاف WG006</span>
      </div>
      <section className="flex justify-center items-center h-screen my-8">
        <ProductDetailsCard />
      </section>
      <section className="flex flex-col gap-8 py-8">
        <h1 className="text-3xl font-bold">الوصف</h1>
        <p className="text-2xl">
          طقم شطاف هو منتج أساسي للحمام يهدف إلى تقديم تجربة تنظيف شخصية صحية
          وسهلة الاستخدام. يتكون الطقم من شطاف يدوي مصنوع من مواد عالية الجودة،
          يضمن المتانة والفعالية في الأداء. يمكن تثبيت الشطاف بسهولة بجانب
          المرحاض ويوفر تدفقًا مائيًا مضبوطًا يمكن التحكم به لتلبية احتياجات
          النظافة الشخصية. يتميز الطقم بتصميم عصري ينسجم مع ديكور الحمام، كما
          أنه يوفر راحة كبيرة للمستخدمين بفضل سهولة الاستخدام والتحكم الكامل في
          تدفق المياه. سواء كنت تبحث عن حلول نظافة شخصية أو إضافة عملية لحمامك،
          فإن طقم الشطاف يعد اختيارًا مثاليًا يجمع بين الجودة والأداء.
        </p>
      </section>
      <section className="py-8">
        <h1 className="text-3xl font-bold mb-8">منتجات متشابهة</h1>
        <ProductListHorizontal />
        <LeftRightButtonsCircle />
      </section>
    </main>
  );
};

export default ProductPage;