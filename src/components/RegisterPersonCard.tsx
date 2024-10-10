import { RegisterCard, yellowBuilding } from "./index";
const RegisterPersonCard = () => {
  return (
    <RegisterCard
      image={yellowBuilding}
      title="شركات"
      desc="خدمات الشركات لعرض وشراء مواد التشطيب"
      footer="دخول كشركة"
      color="amber"
    />
  );
};

export default RegisterPersonCard;
