import { DropDownMenuButton, MainPadding, OrdersTableRow, useApi } from "..";
import { Order } from "../models/Order";

const OrdersPage = () => {
  const { isLoading, error, data } = useApi<Order[]>(
    "Orders/User",
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
        <div className="flex flex-col items-end w-full">
          <div className="w-32 py-4">
            <DropDownMenuButton>جميع الطلبات</DropDownMenuButton>
          </div>
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
