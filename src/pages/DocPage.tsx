import {
  AccentText,
  ButtonGold,
  categoryImg01,
  MainPadding,
  SectionTitles,
  UploadFile,
} from ".";

const DocPage = () => {
  return (
    <main>
      <MainPadding>
        <div className="border-b-2 w-fit mb-8">
          <SectionTitles
            title01="كراسات شروط"
            title01Link="/conditions"
            endTitle="كراسة مواد بناء"
          />
        </div>
        <section className="flex">
          <section className="flex flex-col gap-8 w-full">
            <h1 className="text-2xl font-bold">كراسة مواد بناء</h1>
            <div className="flex gap-8">
              <div className="flex gap-2">
                <span className="font-bold">عدد التصنيفات</span>
                <AccentText bold size="sm">
                  3
                </AccentText>
              </div>
              <div className="flex gap-2">
                <span className="font-bold">الحالة</span>
                <span className="font-bold text-green-600">مقبولة</span>
              </div>
            </div>
            <h2 className="text-xl font-bold">المرفقات</h2>
            <div className="flex gap-4 w-full">
              <div className="rounded-xl w-1/3 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={categoryImg01}
                  alt=""
                />
              </div>
              <div className="rounded-xl w-1/3 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={categoryImg01}
                  alt=""
                />
              </div>
            </div>
          </section>
          <section className="flex flex-col items-center gap-8 w-1/2">
            <UploadFile
              title="ارفع صورة الفاتورة"
              subTitle="أضف صورة الفاتورة"
            />
            <div className="w-4/5">
              <ButtonGold>إرسال</ButtonGold>
            </div>
          </section>
        </section>
      </MainPadding>
    </main>
  );
};

export default DocPage;
