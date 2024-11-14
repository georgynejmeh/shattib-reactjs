import {
  attachmentIcon,
  ButtonGold,
  MainPadding,
  SectionTitles,
  // subCategoryImg01,
  TextInput,
  UploadFile,
  useApi,
  useParams,
  useState,
} from "..";
import { subCategories } from "../assets/json/subCategories";
import { usePostComment } from "../hooks/usePostComment";
import { CirteriaGet } from "../models/Criteria";

const DocPage = () => {
  const [isCommentsShown, setIsCommentsShown] = useState(false);
  const [isUploadReceiptShown, setIsUploadReceiptShown] = useState(false);

  const { id } = useParams();

  const { isLoading, error, data } = useApi<CirteriaGet>(`Criteria/${id}`);

  const receiptForm = new FormData();
  const { patchForm } = useApi(`CriteriaBills/${id}/Receipt`);
  const [receiptImage, setReceiptImage] = useState<File | null>(null);
  const handleReceiptImageChange = (file: File) => {
    setReceiptImage(file);
  };
  const handleReceiptSubmit = async () => {
    if (receiptImage) {
      receiptForm.append("Receipt", receiptImage);
    }
    if (id) {
      receiptForm.append("id", id);
    }
    await patchForm(receiptForm, true);
  };

  const { postData: postComment } = usePostComment(`Criterias/${id}/Comments`); // custom hook to handle API request
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleMessageChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessage(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("message", message);
    if (file) {
      formData.append("attachment", file);
    }

    try {
      console.log("doc page formdata");
      formData.forEach((i) => console.log(i));
      await postComment(formData); // Post the data including the file
      setMessage(""); // Clear the input field after submission
      setFile(null); // Clear the file input
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  // const { isLoading, error, data } = useApi<Comment[]>(
  //   `Criterias/${id}/Comments`
  // );
  // TODO DELETE
  // const temp = [1, 2];

  const category = subCategories.find(
    (subCategory) =>
      subCategory.categoryId === data?.criteriaItems[0].categoryId
  );

  return (
    <main>
      <MainPadding>
        <div className="border-b-2 w-fit mb-8">
          <SectionTitles
            title01="كراسات شروط"
            title01Link="/conditions"
            endTitle={`كراسة ${category?.name}`}
          />
        </div>

        <section className="flex">
          <section className="flex flex-col gap-8 w-full">
            <h1 className="text-2xl font-bold">كراسة {category?.name}</h1>
            <div className="flex gap-8">
              {/* <div className="flex gap-2">
                <span className="font-bold">عدد التصنيفات</span>
                <AccentText bold size="sm">
                  3
                </AccentText>
              </div> */}
              <div className="flex gap-2">
                <span className="font-bold">الحالة</span>
                <span className="font-bold">
                  {data?.status === "Pending" ? (
                    <span className="text-yellow-600">قيد المعالجة</span>
                  ) : data?.status === "Rejected" ? (
                    <span className="text-red-600">مرفوضة</span>
                  ) : data?.status === "Accepted" ? (
                    <span className="text-green-600">مقبولة</span>
                  ) : null}
                </span>
              </div>
            </div>
            <h2 className="text-xl font-bold">المرفقات</h2>
            <div className="flex flex-wrap gap-4 w-full">
              {data?.criteriaItems.map((item, index) => (
                <div key={index} className="rounded-xl w-1/3 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={`${item.image}`}
                    alt=""
                  />
                </div>
              ))}
              {/* <div className="rounded-xl w-1/3 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={subCategoryImg01}
                  alt=""
                />
              </div> */}
            </div>
          </section>
          <section className="flex flex-col items-center gap-8 w-1/2">
            <h2 className="text-xl font-bold">الفاتورة</h2>
            {data && data!.invoices.length > 0 ? (
              <div className="flex gap-4">
                <div className="w-full">
                  <img
                    className="w-full h-full object-cover"
                    src={data?.invoices[0].image}
                    alt=""
                  />
                </div>
                <div className="flex gap-2 self-end">
                  <button
                    onClick={() => {
                      setIsCommentsShown(true);
                      setIsUploadReceiptShown(false);
                    }}
                    className="w-20 py-1 rounded bg-gray-200"
                  >
                    رفض
                  </button>
                  <button
                    onClick={() => {
                      setIsCommentsShown(false);
                      setIsUploadReceiptShown(true);
                    }}
                    className="w-20 py-1 rounded bg-green-600 text-white"
                  >
                    قبول
                  </button>
                </div>
              </div>
            ) : (
              <center className="w-full">
                <span className="font-bold text-2xl">لا توجد فاتورة بعد</span>
              </center>
            )}
          </section>
        </section>

        <hr className="my-12" />

        <section className="flex">
          {isCommentsShown && (
            <section className="flex flex-col gap-8 w-full">
              <h2 className="text-xl from-black">التعليقات</h2>
              <div>
                <div className="w-2/3 rounded-t-xl border">
                  {isLoading ? (
                    <span>جاري التحميل...</span>
                  ) : error ? (
                    <span>حدث خطأ!</span>
                  ) : data ? (
                    <></>
                  ) : // data.map((comment) => (
                  //   /* Comment */
                  //   <div className="flex flex-col gap-4 p-8">
                  //     {/* Profile Pic - Name - Date */}
                  //     <div className="flex items-center gap-4">
                  //       <div className="w-16 h-16 rounded-full bg-gray-200" />
                  //       <div className="flex flex-col">
                  //         <span className="text-lg">اسم المستخدم</span>
                  //         <span className="text-s text-gray-400">
                  //           قبل 10 دقائق
                  //         </span>
                  //       </div>
                  //     </div>
                  //     <p>{comment.message}</p>
                  //   </div>
                  // ))
                  null}
                  {data?.comments.map((comment) => (
                    /* Comment */
                    <div className="flex flex-col gap-4 p-8">
                      {/* Profile Pic - Name - Date */}
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gray-200" />
                        <div className="flex flex-col">
                          <span className="text-lg">مدير الموقع</span>
                          {/* <span className="text-s text-gray-400">
                          قبل 10 دقائق
                        </span> */}
                        </div>
                      </div>
                      <p>{comment.message}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col w-2/3 rounded-b-xl border p-4 gap-2">
                  <form onSubmit={handleSubmit}>
                    <div className="flex gap-2">
                      <div className="w-full">
                        <TextInput
                          value={message}
                          onChange={handleMessageChange}
                          big
                          placeholder="أضف تعليق"
                        />
                      </div>
                      <label htmlFor="attachment" className="cursor-pointer">
                        <img src={attachmentIcon} alt="attachment" />
                        <input
                          id="attachment"
                          type="file"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                    <div className="w-20 self-end mt-4">
                      <ButtonGold onClick={handleSubmit}>إرسال</ButtonGold>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          )}
          {isUploadReceiptShown && (
            <section className="flex flex-col items-center gap-8 w-1/2 h-96">
              <UploadFile
                title="ارفع صورة الفاتورة"
                subTitle="أضف صورة الفاتورة"
                onImageChange={handleReceiptImageChange}
              />
              <div className="w-4/5">
                <ButtonGold onClick={handleReceiptSubmit}>إرسال</ButtonGold>
              </div>
            </section>
          )}
        </section>
      </MainPadding>
    </main>
  );
};

export default DocPage;
