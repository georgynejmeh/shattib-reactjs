import {
  AccentText,
  bluePenIcon,
  downArrowIcon,
  Link,
  redTrashIcon,
  RoundButton,
  useApi,
} from "../..";

import "../../App.css";
import { Cirteria } from "../../models/Criteria";

const AdminCriteriasPage = () => {
  // const temp = [1, 2, 3];
  const { isLoading, error, data } = useApi<Cirteria[]>("Criteria/GetAll");
  console.log(data);
  return (
    <main className="p-main">
      <AccentText>الكراسات</AccentText>
      <div className="w-full flex justify-center py-8">
        <RoundButton active>الكل</RoundButton>
        <RoundButton>معلقة</RoundButton>
        <RoundButton>مقبولة</RoundButton>
        <RoundButton>مرفوضة</RoundButton>
      </div>
      <table className="orders-table">
        <thead>
          <tr>
            <th>رقم الكراسة</th>
            <th>عنوان الكراسة</th>
            <th>اسم الزبون</th>
            <th>رقم الهاتف</th>
            <th>تاريخ الإرسال</th>
            <th>الحالة</th>
            <th>العمليات</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <span>جاري التحميل...</span>
          ) : error ? (
            <span>حدث خطأ!</span>
          ) : data ? (
            data.map((criteria, index) => (
              <tr key={index}>
                <td>#{criteria.id}</td>
                <td>{criteria.title}</td>
                <td>{criteria.userName}</td>
                <td dir="ltr">{criteria.phoneNumber}</td>
                <td>{criteria.DateOfCreation}</td>
                <td>
                  {criteria.status === "Pending" ? (
                    <div className="flex gap-4 w-32 mx-auto justify-center rounded-full bg-yellow-100 py-1">
                      <span>قيد المعالجة</span>
                      <img className="w-3" src={downArrowIcon} alt="" />
                    </div>
                  ) : criteria.status === "Rejected" ? (
                    <div className="flex gap-4 w-32 mx-auto justify-center rounded-full bg-red-100 py-1">
                      <span>مرفوضة</span>
                      <img className="w-3" src={downArrowIcon} alt="" />
                    </div>
                  ) : criteria.status === "Accepted" ? (
                    <div className="flex gap-4 w-32 mx-auto justify-center rounded-full bg-green-100 py-1">
                      <span>مقبولة</span>
                      <img className="w-3" src={downArrowIcon} alt="" />
                    </div>
                  ) : null}
                </td>
                <td>
                  <div className="flex gap-4 w-full justify-center">
                    <Link to={`${criteria.id}`}>
                      <img src={bluePenIcon} alt="" />
                    </Link>
                    <button>
                      <img src={redTrashIcon} alt="" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : null}
        </tbody>
      </table>
    </main>
  );
};

export default AdminCriteriasPage;
