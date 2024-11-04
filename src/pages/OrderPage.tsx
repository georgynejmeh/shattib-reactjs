import {
  AccentText,
  databaseIcon,
  drawerIcon,
  MainPadding,
  OrderItem,
  trashCanIcon,
  truckIcon,
} from "..";

const OrderPage = () => {
  // TODO DELETE
  const temp = [1, 2, 3, 4, 5];
  return (
    <main>
      <MainPadding>
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold">الطلب #123456</h1>
          <div className="py-1 px-3 rounded-full max-w-28 max-h-fit text-center bg-orange-200">
            قيد المعالجة
          </div>
        </div>

        <hr className="my-4" />

        <section className="flex items-centers gap-8 border-b-2 w-fit p-4">
          <div className="flex items-center gap-4">
            <img src={drawerIcon} alt="" />
            <span className="text-gray-400 font-bold">تاريخ الإنشاء</span>
            <span>18/10/2024</span>
          </div>
          <div className="flex items-center gap-4">
            <img src={truckIcon} alt="" />
            <span className="text-gray-400 font-bold">تاريخ التوصيل</span>
            <span>لم يحدد بعد</span>
          </div>
          <div className="flex items-center gap-4">
            <img src={databaseIcon} alt="" />
            <span className="text-gray-400 font-bold">التكلفة الكلية</span>
            <AccentText>1600 ريال</AccentText>
          </div>
          <button>
            <img className="ms-16 h-6" src={trashCanIcon} alt="" />
          </button>
        </section>

        <section>
          <h1 className="text-2xl font-bold my-8">المتنجات</h1>
          {/* TODO DELETE LOOP */}
          {temp.map((index) => (
            <OrderItem index={index} />
          ))}
        </section>
      </MainPadding>
    </main>
  );
};

export default OrderPage;
