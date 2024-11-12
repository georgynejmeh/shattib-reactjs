import { AccentText, useApi } from "../..";
import { Consultation } from "../../models/Consultation";

import "../../App.css";

const AdminConsultationsPage = () => {
  const { isLoading, error, data } = useApi<Consultation[]>("Consultations");
  console.log(data);
  return (
    <main className="p-main">
      <AccentText>طلبات رفع مساحة</AccentText>
      {/* <h1 className="text-2xl font-bold mb-8">الاستشارات</h1> */}
      <table className="mt-8 orders-table">
        <thead>
          <tr>
            <th>الرمز</th>
            <th>الموضوع</th>
            <th>هاتف</th>
            {/* <th>اختصاص المهندس</th> */}
            <th>تفاصيل</th>
            <th>فئة</th>
            <th>الحالة</th>
            <th>تاريخ الطلب</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <span>جاري التحميل...</span>
          ) : error ? (
            <span>حدث خطأ!</span>
          ) : (
            data?.map((consultation) => (
              <tr key={consultation.id}>
                <td>{consultation.id}</td>
                <td>{consultation.consultationTopic}</td>
                <td>{consultation.phoneNumber}</td>
                {/* <td>{consultation.engineerSpecification}</td> */}
                <td>{consultation.details}</td>
                <td>{consultation.projectCategory}</td>
                <td>
                  {consultation.status === "Pending" ? (
                    <div className="bg-yellow-100 w-32 py-1 rounded-full mx-auto">
                      معلّق
                    </div>
                  ) : consultation.status === "Completed" ? (
                    <div className="bg-yellow-100 w-32 py-1 rounded-full mx-auto">
                      معالج
                    </div>
                  ) : null}
                </td>
                <td>{consultation.dateOfRequest.substring(0, 10)}</td>
                {/* <td>{consultation.userId}</td> */}
              </tr>
            ))
          )}
        </tbody>
      </table>
      {/* <ul>
        {data?.map((consultation) => (
          <div className="flex gap-2">
            <div>{consultation.id}</div>
            <div>{consultation.consultationTopic}</div>
            <div>{consultation.status}</div>
            <div>{consultation.engineerSpecification}</div>
            <div>{consultation.projectCategory}</div>
            <div>{consultation.phoneNumber}</div>
            <div>{consultation.dateOfRequest}</div>
            <div>{consultation.details}</div>
            <div>{consultation.userId}</div>
          </div>
        ))}
      </ul> */}
    </main>
  );
};

export default AdminConsultationsPage;
