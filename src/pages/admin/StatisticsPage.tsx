import {
  AccentText,
  doubleLeftArrowIcon,
  downArrowIcon,
  grayCartIcon,
  grayCompanyIcon,
  grayCubeIcon,
  grayPersonIcon,
  StatisticsCard,
  useApi,
} from "../..";
import { StatisticsNumber } from "../../models/StatisticsNumber";

const StatisticsPage = () => {
  const {
    isLoading: clientsLoading,
    error: clientsError,
    data: clientsData,
  } = useApi<StatisticsNumber>("Statistics/GetClients");
  const {
    isLoading: businessesLoading,
    error: businessesError,
    data: businessesData,
  } = useApi<StatisticsNumber>("Statistics/GetBusinesses");
  const {
    isLoading: ordersLoading,
    error: ordersError,
    data: ordersData,
  } = useApi<StatisticsNumber>("Statistics/GetOrders");
  const {
    isLoading: productsLoading,
    error: productsError,
    data: productsData,
  } = useApi<StatisticsNumber>("Statistics/GetProducts");
  const {
    isLoading: profitsLoading,
    error: profitsError,
    data: profitsData,
  } = useApi<StatisticsNumber>(
    "Statistics/GetProfits?Day=8&Month=11&Year=2024"
  );

  // TODO DELETE
  const temp = ["ياسر القحطاني", "سلمان الفرج", "سالم الدوسري", "محمد العويس"];
  return (
    <main className="p-main">
      <AccentText>الإحصائيات</AccentText>
      <h2 className="text-lg font-bold my-4">آخر الإحصائيات</h2>

      <section className="flex gap-4">
        <StatisticsCard
          img={grayCubeIcon}
          title="عدد المنتجات"
          num={productsData?.count || 0}
          color="red"
        />
        <StatisticsCard
          img={grayCartIcon}
          title="عدد الطلبات"
          num={ordersData?.count || 0}
          color="green"
        />
        <StatisticsCard
          img={grayPersonIcon}
          title="عدد الزبائن"
          num={clientsData?.count || 0}
          color="blue"
        />
        <StatisticsCard
          img={grayCompanyIcon}
          title="عدد الشركات"
          num={businessesData?.count || 0}
          color="gold"
        />
      </section>

      <hr className="my-8" />

      <section className="flex">
        <div className="w-2/3">
          <h1 className="text-2xl font-bold">المبيعات الشهرية</h1>
          <div className="flex items-center gap-4 py-4">
            <button className="bg-gray-100 rounded">
              <div className="flex w-24 gap-2 justify-center">
                <span>اوكتوبر</span>
                <img className="w-4" src={downArrowIcon} alt="" />
              </div>
            </button>
            <AccentText>12500 ريال</AccentText>
          </div>
          <img src="/src/assets/imgs/temp/chart.png" alt="" />
        </div>

        <div className="w-1/3">
          <div className="flex justify-between w-full mb-4">
            <h1 className="text-2xl font-bold">المشتركين الجدد</h1>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-nowrap">عرض الكل</h2>
              <img src={doubleLeftArrowIcon} alt="" />
            </div>
          </div>

          <div className="flex flex-col w-full bg-gray-100 py-8 px-4 rounded-xl shadow-lg">
            <div className="flex gap-4 mx-auto">
              <button className="bg-gray-700 text-white w-32 rounded-full py-2">
                أفراد
              </button>
              <button className="bg-gray-200 w-32 rounded-full py-2">
                شركات
              </button>
            </div>
            {/* TODO DELETE LOOP */}
            {temp.map((name) => (
              <div className="flex items-center gap-4 px-12 pt-4">
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                <span className="text-xl">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default StatisticsPage;
