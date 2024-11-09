import { useApi } from "../../hooks/useApi";
import { Consultation } from "../../models/Consultation";

const AdminConsultationsPage = () => {
  const { isLoading, error, data } = useApi<Consultation[]>("Consultations");
  console.log(data);
  return (
    <>
      <div>AdminConsultationsPage</div>
      <ul>
        {data?.map((consultation) => (
          <li>
            <div>{consultation.id}</div>
            <div>{consultation.consultationTopic}</div>
            <div>{consultation.status}</div>
            <div>{consultation.engineerSpecification}</div>
            <div>{consultation.projectCategory}</div>
            <div>{consultation.phoneNumber}</div>
            <div>{consultation.dateOfRequest}</div>
            <div>{consultation.details}</div>
            <div>{consultation.userId}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AdminConsultationsPage;
