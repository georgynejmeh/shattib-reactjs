import { AccentText, MainPadding, useApi } from "..";
import { Consultation } from "../models/Consultation";

const ConsultationsPage = () => {
  const { isLoading, error, data } = useApi<Consultation[]>(
    "Consultations/GetUserConsultations",
    "GET",
    true
  );

  return (
    <main>
      <MainPadding>
        <AccentText>طلبات رفع مساحة</AccentText>
        {/* <h1 className="text-2xl font-bold mb-8">الاستشارات</h1> */}
        <div className="overflow-x-scroll overflow-y-hidden">
          <table className="mt-8 min-w-max orders-table">
            <thead>
              <tr>
                {[
                  "الرمز",
                  "الموضوع",
                  "هاتف",
                  // "اختصاص المهندس",
                  "تفاصيل",
                  "فئة",
                  "الحالة",
                  "تاريخ الطلب",
                ].map((item) => (
                  <th className="max-lg:px-4">{item}</th>
                ))}
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
        </div>

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
      </MainPadding>
    </main>
  );
};

export default ConsultationsPage;
