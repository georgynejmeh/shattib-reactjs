import {
  attachmentIcon,
  billImg,
  ButtonGold,
  CommentItem,
  downArrowIcon,
  paymentReceiptImg,
  TextInput,
  TitleNumber,
  useApi,
  useParams,
} from "../..";
import { Cirteria } from "../../models/Criteria";

const AdminCriteriaPage = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useApi<Cirteria>(`Criteria/${id}`);
  // use params get id
  // const temp = [1, 2];

  return (
    <main className="p-main">
      {isLoading ? (
        <span>جاري التحميل...</span>
      ) : error ? (
        <span>حدث خطأ!</span>
      ) : data ? (
        <section>
          <div className="flex justify-between">
            <div>
              <div className="flex gap-4">
                <h1 className="text-2xl font-bold">كراسة رقم #{data.id}</h1>
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
          <TitleNumber inverse subTitle={data.title}>
            عنوان الكراسة
          </TitleNumber>
          <TitleNumber inverse subTitle={data.userName}>
            اسم الزبون
          </TitleNumber>
          <TitleNumber inverse subTitle={data.phoneNumber}>
            رقم الهاتف
          </TitleNumber>
          <h2 className="text-xl font-bold">محتوى الكراسة:</h2>
          <div className="rounded bg-gray-100">
            {data.criteriaItems.map((criteriaItem) => (
              <div className="flex p-8">
                <div className="w-2/3 p-8">
                  <TitleNumber inverse subTitle={criteriaItem.categoryName}>
                    التصنيف
                  </TitleNumber>
                  <div className="flex gap-6">
                    <TitleNumber
                      inverse
                      column
                      subTitle={criteriaItem.productName}
                    >
                      اسم المنتج
                    </TitleNumber>
                    <TitleNumber
                      inverse
                      column
                      subTitle={`${criteriaItem.amount}`}
                    >
                      الكمية
                    </TitleNumber>
                    <TitleNumber
                      inverse
                      column
                      subTitle={criteriaItem.measurementUnit}
                    >
                      واحدة القياس
                    </TitleNumber>
                  </div>
                  <div>
                    <h3 className="text-gray-500">وصف المنتج</h3>
                    <p>{criteriaItem.description}</p>
                  </div>
                </div>

                <div className="w-1/3 p-8">
                  <h3>المرفقات</h3>
                  <div className="w-64 aspect-video">
                    <img
                      className="w-full h-full object-cover"
                      src={criteriaItem.image}
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
                {data.status === "Pending" ? (
                  <div className="flex gap-4 w-32 justify-center rounded-full bg-yellow-100 py-1">
                    <span>قيد المعالجة</span>
                    <img className="w-3" src={downArrowIcon} alt="" />
                  </div>
                ) : data.status === "Rejected" ? (
                  <div className="flex gap-4 w-32 justify-center rounded-full bg-red-100 py-1">
                    <span>مرفوضة</span>
                    <img className="w-3" src={downArrowIcon} alt="" />
                  </div>
                ) : data.status === "Accepted" ? (
                  <div className="flex gap-4 w-32 justify-center rounded-full bg-green-100 py-1">
                    <span>مقبولة</span>
                    <img className="w-3" src={downArrowIcon} alt="" />
                  </div>
                ) : null}
              </div>
              <div className="w-1/2 py-4">
                <img
                  className="w-full h-full object-cover"
                  src={billImg}
                  alt=""
                />
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
                {data.comments.map((comment) => (
                  <CommentItem message={comment.message} />
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
                  <div className="w-20 self-end py-4">
                    <ButtonGold>إرسال</ButtonGold>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </section>
      ) : null}
    </main>
  );
};

export default AdminCriteriaPage;
