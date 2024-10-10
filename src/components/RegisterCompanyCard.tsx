import { RegisterCard, bluePerson } from "./index";

const RegisterCompanyCard = () => {
  return (
    <RegisterCard
      image={bluePerson}
      title="أفراد"
      desc="خدمات الأفراد لتصفح وشراء مواد التشطيب"
      footer="دخول كفرد"
      color="sky"
    />
  );
};

export default RegisterCompanyCard;
