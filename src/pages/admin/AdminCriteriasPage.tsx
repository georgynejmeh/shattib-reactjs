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

const AdminCriteriasPage = () => {
  const temp = [1, 2, 3];
  const { isLoading, error, data } = useApi("Criteria/GetAll");
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
          {temp.map((item, index) => (
            <tr key={index}>
              <td>#12345647</td>
              <td>كراسة مواد بناء</td>
              <td>محمد المحمد</td>
              <td dir="ltr">+9661111111111</td>
              <td>12/3/2024</td>
              <td>
                <div className="flex gap-4 w-full justify-center rounded-full bg-green-100 py-1">
                  <span>مقبولة</span>
                  <img className="w-3" src={downArrowIcon} alt="" />
                </div>
              </td>
              <td>
                <div className="flex gap-4 w-full justify-center">
                  {/* TODO REPLACE WITH ID */}
                  <Link to={`${index}`}>
                    <img src={bluePenIcon} alt="" />
                  </Link>
                  <button>
                    <img src={redTrashIcon} alt="" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default AdminCriteriasPage;
