import { accountIcon, Button, plusCircleIcon, TextInput } from ".";

const EngineerRequestCard = () => {
  return (
    <main className="fixed z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="relative rounded-2xl bg-white w-1/2 h-4/5 py-8">
        <button className="absolute top-4 left-4 z-10">
          <img src={plusCircleIcon} alt="" />
        </button>
        <div className="flex justify-center">
          <h1 className="text-lg">طلب مهندس</h1>
          <img className="ps-4" src={accountIcon} alt="" />
        </div>
        <div className="flex flex-col gap-4 py-8">
          <div className="flex">
            <div className="w-full px-8 flex flex-col gap-4">
              <TextInput blackTitle title="الاسم" placeholder="الاسم" />
              <TextInput
                blackTitle
                title="رقم الهاتف"
                placeholder="رقم الهاتف"
              />
              <TextInput
                blackTitle
                title="اختصاص المهندس"
                placeholder="اختصاص المهندس"
              />
            </div>
            <div className="w-full px-8 flex flex-col gap-4">
              <TextInput
                blackTitle
                title="البريد الالكتروني"
                placeholder="البريد الالكتروني"
              />
              <TextInput
                blackTitle
                title="موضوع الطلب"
                placeholder="موضوع الطلب"
              />
              <TextInput
                blackTitle
                title="نوع المشروع"
                placeholder="نوع المشروع"
              />
            </div>
          </div>
          <div className="w-full h-full px-8">
            <TextInput
              blackTitle
              title="تفاصيل الطلب"
              placeholder="تفاصيل ومعلومات إضافية"
            />
          </div>
          <div className="w-full flex justify-center pt-4">
            <div className="w-48">
              <Button size="md">إرسال الطلب</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EngineerRequestCard;
