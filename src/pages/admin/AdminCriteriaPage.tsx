import { useApi } from "../../hooks/useApi";

const AdminCriteriaPage = () => {
  const { isLoading, error, data } = useApi("Criteria/GetAll");
  console.log(data);

  return <div>AdminCriteriaPage</div>;
};

export default AdminCriteriaPage;
