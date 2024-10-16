import {
  AccentText,
  ConditionCard,
  goldLinkIcon,
  Link,
  MainPadding,
  RoundButton,
} from ".";

const ConditionDocsPage = () => {
  return (
    <main>
      <MainPadding>
        <section className="flex items-center">
          <h1 className="text-nowrap text-2xl font-bold pb-4">كراسات الشروط</h1>
          <div className="grid w-full">
            <div className="felx justify-self-center">
              <RoundButton>الكل</RoundButton>
              <RoundButton>معلًقة</RoundButton>
              <RoundButton>مقبولة</RoundButton>
              <RoundButton>مرفوضة</RoundButton>
            </div>
          </div>
          <Link to={"new"}>
            <AccentText>
              <div className="text-nowrap flex gap-2">
                <span className="underline">أضف كراسة جديدة</span>
                <img src={goldLinkIcon} alt="" />
              </div>
            </AccentText>
          </Link>
        </section>
        <section className="flex flex-wrap gap-8 my-16">
          <ConditionCard status="مرفوضة" />
          <ConditionCard status="معلًقة" />
          <ConditionCard status="مقبولة" />
          <ConditionCard status="مرفوضة" />
          <ConditionCard status="معلًقة" />
          <ConditionCard status="مقبولة" />
          <ConditionCard status="مرفوضة" />
          <ConditionCard status="معلًقة" />
        </section>
      </MainPadding>
    </main>
  );
};

export default ConditionDocsPage;
