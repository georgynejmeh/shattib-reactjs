import { MainPadding, ButtonGold, plusCircleIcon, GoldConditionCard } from ".";

const ConfirmNewConditionPage = () => {
  return (
    <main>
      <MainPadding>
        <h1 className="text-2xl font-bold">طرح كراسة</h1>
        <section className="py-8">
          <div className="flex gap-8">
            <h2>التصنيفات المختارة</h2>
            <button>
              <div className="flex gap-2">
                <img src={plusCircleIcon} alt="" />
                <span>إضافة المزيد</span>
              </div>
            </button>
          </div>
          <div className="flex gap-4 py-8">
            <GoldConditionCard number={1} />
            <GoldConditionCard number={2} />
            <GoldConditionCard number={3} />
            <GoldConditionCard number={1} />
            <GoldConditionCard number={2} />
          </div>
        </section>
        <div className="flex flex-col w-full py-4">
          <div className="w-48 self-end">
            <ButtonGold>إرسال الكراسة</ButtonGold>
          </div>
        </div>
      </MainPadding>
    </main>
  );
};

export default ConfirmNewConditionPage;
