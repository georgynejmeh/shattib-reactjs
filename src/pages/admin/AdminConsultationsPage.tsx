import { useApi } from "../../hooks/useApi";
import { Consultation } from "../../models/Consultation";

import "../../App.css";

const AdminConsultationsPage = () => {
  const { isLoading, error, data } = useApi<Consultation[]>("Consultations");
  console.log(data);
  return (
    <main className="p-main">
      <table className="orders-table">
        <thead>
          <tr>
            <th>الرمز</th>
            <th>الموضوع</th>
            <th>هاتف</th>
            <th>اختصاص المهندس</th>
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
              <tr key={consultation.id} className="flex gap-2">
                <td>{consultation.id}</td>
                <td>{consultation.consultationTopic}</td>
                <td>{consultation.status}</td>
                <td>{consultation.phoneNumber}</td>
                <td>{consultation.engineerSpecification}</td>
                <td>{consultation.details}</td>
                <td>{consultation.projectCategory}</td>
                <td>{consultation.dateOfRequest}</td>
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
