import { MainPadding, useApi, useParams } from "../..";
import { Consultation } from "../../models/Consultation";

const AdminConsultationPage = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useApi<Consultation>(
    `Consultations/${id}`
  );
  return (
    <main>
      <MainPadding>
        <h1 className="text-2xl font-bold">طلب استشارة رقم #{id}</h1>
        <h2> </h2>
      </MainPadding>
    </main>
  );
};

export default AdminConsultationPage;
