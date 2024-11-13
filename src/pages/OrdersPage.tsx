import {
  DropDownMenuButton,
  MainPadding,
  OrdersTableRow,
  useApi,
  useState,
} from "..";
import { Order } from "../models/Order";

const OrdersPage = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [filter, setFilter] = useState<
    "Pending" | "Accepted" | "Rejected" | "Shipped" | "All" | string
  >("All");
  const { isLoading, error, data } = useApi<Order[]>(
    filter === "All" ? "Orders/User" : `Orders/UserKind?kind=${filter}`,
    "GET",
    true
  );

  // TODO DELETE
  // const temp: Array<"قيد المعالجة" | "مقبول" | "مرفوض" | "مكتمل"> = [
  //   "قيد المعالجة",
  //   "مقبول",
  //   "مرفوض",
  //   "مكتمل",
  //   "قيد المعالجة",
  //   "مقبول",
  //   "مرفوض",
  //   "مكتمل",
  // ];
  return (
    <main>
      <MainPadding>
        <h1 className="text-2xl font-bold">الطلبات</h1>
        <div className="relative flex flex-col items-end w-full">
          <div onClick={() => setIsDropdown(!isDropdown)} className="w-32 py-4">
            <DropDownMenuButton>
              {filter === "All"
                ? "جميع الطلبات"
                : filter === "Accepted"
                ? "مقبول"
                : filter === "Pending"
                ? "قيد المعالجة"
                : filter === "Rejected"
                ? "مرفوض"
                : filter === "Shipped"
                ? "مكتمل"
                : ""}
            </DropDownMenuButton>
          </div>

          {isDropdown && (
            <div className="absolute top-12 flex flex-col bg-white shadow-xl">
              {[
                { query: "All", arabic: "جميع الطلبات" },
                { query: "Pending", arabic: "قيد المعالجة" },
                { query: "Accepted", arabic: "مقبول" },
                { query: "Rejected", arabic: "مرفوض" },
                { query: "Shipped", arabic: "مكتمل" },
              ].map((status) => (
                <button
                  onClick={() => {
                    setIsDropdown(false);
                    setFilter(status.query);
                  }}
                  className="px-4 py-1 hover:bg-gray-100"
                >
                  {status.arabic}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="overflow-x-scroll">
          <table className="orders-table min-w-max">
            <thead>
              <tr>
                {[
                  "رقم الطلب",
                  "تاريخ الإنشاء",
                  // "المنتجات",
                  // "الكمية",
                  "التكلفة الكلية",
                  "حالة الطلب",
                  "تاريخ التنفيذ",
                  "العمليات",
                ].map((item) => (
                  <th className="max-lg:px-4">{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td>
                    <span>جاري التحميل...</span>
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td>
                    <span>حدث خطأ!</span>
                  </td>
                </tr>
              ) : data ? (
                data.map((order) => (
                  <OrdersTableRow
                    user
                    key={order.id}
                    id={order.id}
                    totalPrice={order.totalPrice}
                    orderItems={order.orderItems}
                    dateOfArrival={order.dateOfArrival}
                    dateOfOrder={order.dateOfOrder}
                    status={
                      order.status === "Pending"
                        ? "قيد المعالجة"
                        : order.status === "Accepted"
                        ? "مقبول"
                        : order.status === "Rejected"
                        ? "مرفوض"
                        : order.status === "Shipped"
                        ? "مكتمل"
                        : ""
                    }
                  />
                ))
              ) : null}
              {/* TODO DELETE LOOP */}
              {/* {temp.map((item) => (
              <OrdersTableRow status={item} />
            ))} */}
            </tbody>
          </table>
        </div>
      </MainPadding>
    </main>
  );
};

export default OrdersPage;
