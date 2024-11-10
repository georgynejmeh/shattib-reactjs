import {
  ButtonGold,
  ConditionCard,
  Link,
  MainPadding,
  plusCircleOutlineWhiteIcon,
  RoundButton,
  useApi,
} from "..";
import { Cirteria } from "../models/Criteria";

const ConditionDocsPage = () => {
  const { isLoading, error, data } = useApi<Cirteria[]>("Criteria/GetAll");
  return (
    <main>
      <MainPadding>
        <section className="flex items-center max-lg:flex-col max-lg:w-full">
          <h1 className="text-nowrap text-2xl font-bold pb-4">كراسات الشروط</h1>
          <div className="grid w-full">
            <div className="felx justify-self-center max-lg:mb-4">
              <RoundButton active>الكل</RoundButton>
              <RoundButton>معلًقة</RoundButton>
              <RoundButton>مقبولة</RoundButton>
              <RoundButton>مرفوضة</RoundButton>
            </div>
          </div>
          <Link to={"new"}>
            <ButtonGold>
              <div className="text-nowrap flex gap-2 w-max p-2">
                <img src={plusCircleOutlineWhiteIcon} alt="" />
                <span>أضف كراسة</span>
              </div>
            </ButtonGold>
            {/* <AccentText>
              <div className="text-nowrap flex gap-2">
                <span className="underline">أضف كراسة جديدة</span>
                <img src={goldLinkIcon} alt="" />
              </div>
            </AccentText> */}
          </Link>
        </section>
        <section className="flex flex-wrap gap-8 my-16 max-lg:justify-center">
          {isLoading ? (
            <span>جاري التحميل...</span>
          ) : error ? (
            <span>حدث خطأ!</span>
          ) : data ? (
            data.map((criteria) => (
              <ConditionCard
                key={criteria.id}
                criteria={criteria}
                status={criteria.status}
              />
            ))
          ) : null}
          {/* <ConditionCard status="مرفوضة" />
          <ConditionCard status="معلًقة" />
          <ConditionCard status="مقبولة" />
          <ConditionCard status="مرفوضة" />
          <ConditionCard status="معلًقة" />
          <ConditionCard status="مقبولة" />
          <ConditionCard status="مرفوضة" />
          <ConditionCard status="معلًقة" /> */}
        </section>
      </MainPadding>
    </main>
  );
};

export default ConditionDocsPage;
