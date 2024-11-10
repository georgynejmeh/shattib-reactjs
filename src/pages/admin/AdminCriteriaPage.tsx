import {
  attachmentIcon,
  billImg,
  ButtonGold,
  categoryImg01,
  downArrowIcon,
  paymentReceiptImg,
  TextInput,
  TitleNumber,
} from "../..";

const AdminCriteriaPage = () => {
  // use params get id
  const temp = [1, 2];
  return (
    <main className="p-main">
      <div className="flex justify-between">
        <div>
          <div className="flex gap-4">
            <h1 className="text-2xl font-bold">كراسة رقم #123456</h1>
            <div className="flex gap-4 rounded-full bg-green-100 py-1 px-4">
              <span>مقبولة</span>
              <img className="w-3" src={downArrowIcon} alt="" />
            </div>
          </div>
          <h3 className="text-gray-500">15/10/2024</h3>
        </div>
        <div className="w-64">
          <ButtonGold>إرسال فاتورة</ButtonGold>
        </div>
      </div>
      <hr />
      <TitleNumber inverse subTitle="كراسة مواد بناء ">
        عنوان الكراسة
      </TitleNumber>
      <TitleNumber inverse subTitle="محمد المحمد">
        اسم الزبون
      </TitleNumber>
      <TitleNumber inverse subTitle="+966111111111">
        رقم الهاتف
      </TitleNumber>
      <h2 className="text-xl font-bold">محتوى الكراسة:</h2>
      <div className="rounded bg-gray-100">
        {temp.map(() => (
          <div className="flex p-8">
            <div className="w-2/3 p-8">
              <TitleNumber inverse subTitle="الديكورات">
                التصنيف
              </TitleNumber>
              <div className="flex gap-6">
                <TitleNumber inverse column subTitle="ألواح جدارية">
                  اسم المنتج
                </TitleNumber>
                <TitleNumber inverse column subTitle="6">
                  الكمية
                </TitleNumber>
                <TitleNumber inverse column subTitle="متر">
                  واحدة القياس
                </TitleNumber>
              </div>
              <div>
                <h3 className="text-gray-500">وصف المنتج</h3>
                <p>
                  يرجى توفير ألواح جدارية بجودة عالية ومتنوعة المواد خشب،
                  بلاستيك، جبس، بتصاميم وأحجام قابلة للتخصيص، مع ضمان سهولة
                  التركيب والتشطيبات المتعددة ناعمة وثلاثية الأبعاد. يجب أن تكون
                  مقاومة للبقع وآمنة، مع التزام بمعايير السلامة والجودة. نرجو
                  تقديم المنتج بتغليف آمن، وضمان شامل لمدة لا تقل عن X سنوات.
                </p>
              </div>
            </div>

            <div className="w-1/3 p-8">
              <h3>المرفقات</h3>
              <div className="w-64 aspect-video">
                <img
                  className="w-full h-full object-cover"
                  src={categoryImg01}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="flex justify-between p-8">
        <div>
          <div className="flex gap-2 items-center">
            <h3>الفاتورة:</h3>
            <div className="py-1 px-5 bg-green-100 rounded-full">مقبولة</div>
          </div>
          <div className="w-1/2 py-4">
            <img className="w-full h-full object-cover" src={billImg} alt="" />
          </div>
          <div className="flex gap-4">
            <button className="bg-gray-200 py-1 px-3 rounded">
              الفواتير السابقة
            </button>
            <div className="w-44">
              <ButtonGold>فاتورة جديدة</ButtonGold>
            </div>
          </div>
        </div>

        <div>
          <h3>وصل الدفع من الزبون</h3>
          <img src={paymentReceiptImg} alt="" />
        </div>
      </section>

      <hr />

      <section className="flex flex-col gap-8 w-full py-4">
        <h2 className="text-xl from-black">التعليقات</h2>
        <div>
          <div className="w-2/3 rounded-t-xl border">
            {temp.map(() => (
              /* Comment */
              <div className="flex flex-col gap-4 p-8">
                {/* Profile Pic - Name - Date */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200" />
                  <div className="flex flex-col">
                    <span className="text-lg">اسم المستخدم</span>
                    <span className="text-s text-gray-400">قبل 10 دقائق</span>
                  </div>
                </div>
                <p>
                  محتوى التعليق محتوى التعليق محتوى التعليق محتوى محتوى التعليق
                  محتوى التعليق محتوى التعليق محتوى التعليق محتوى التعليق محتوى
                  التعليق محتوى التعليق محتوى التعليق
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-2/3 rounded-b-xl border p-4 gap-2">
            <form>
              <div className="flex gap-2">
                <div className="w-full">
                  <TextInput big placeholder="أضف تعليق" />
                </div>
                <label htmlFor="attachment" className="cursor-pointer">
                  <img src={attachmentIcon} alt="attachment" />
                  <input id="attachment" type="file" className="hidden" />
                </label>
              </div>
              <div className="w-20 self-end">
                <ButtonGold>إرسال</ButtonGold>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminCriteriaPage;
