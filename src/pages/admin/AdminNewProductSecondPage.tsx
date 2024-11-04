import {
  ButtonGold,
  Link,
  Navigate,
  NewProductHeaderText,
  TextInput,
  UploadFile,
  useApi,
} from "../..";
import { MyFormData } from "./AdminNewProductContainer";

interface Props {
  formData: MyFormData;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const AdminNewProductSecondPage = ({ formData, onInputChange }: Props) => {
  const { postData, isLoading, error, data } = useApi("Products", "POST");
  return (
    <main>
      {data ? <Navigate to={"/admin/home"} /> : null}

      <NewProductHeaderText second />

      <section className="flex flex-col p-main">
        <div className="w-full flex gap-8">
          <div className="w-full flex flex-col gap-8">
            <TextInput
              blackTitle
              title="الضمان"
              placeholder="أدخل مدة الضمان"
            />
            <TextInput
              blackTitle
              title="الكلمات الدلالية"
              placeholder="كلمات دلالية حول المنتج"
            />
          </div>
          <div className="w-full">
            <TextInput
              big
              blackTitle
              title="سياسة الإرجاع والاستبدال"
              placeholder="سياسة الإرجاع والاستبدال"
              name="RetrivalAndReplacing"
              value={formData.RetrivalAndReplacing}
              onChange={onInputChange}
            />
          </div>
        </div>

        <div className="w-full h-40 flex gap-8 mt-8">
          <div className="w-full">
            <TextInput
              big
              blackTitle
              title="شهادات هيئة المقاييس والجودة"
              placeholder="أضف شهادات المنتج إن وجدت"
            />
          </div>
          <div className="w-full">
            <TextInput
              big
              blackTitle
              title="الملاحظات"
              placeholder="ملاحظات إضافية"
              name="Notes"
              value={formData.Notes}
              onChange={onInputChange}
            />
          </div>
        </div>

        <div className="w-1/2 pe-4 h-80 mt-8">
          <UploadFile title="صورة المنتج" subTitle="ارفع صورة المنتج" />
        </div>

        <div className="flex w-80 gap-4 self-end mt-8">
          <Link className="w-full" to={"/admin/product/new"}>
            <button className="rounded bg-gray-200 w-full text-lg font-medium py-1">
              السابق
            </button>
          </Link>
          {/* <Link className="w-full" to={"/admin/product/new"}> */}
          <ButtonGold onClick={() => postData(formData)}>
            {isLoading ? "التحميل..." : "أضف المنتج"}
          </ButtonGold>
          {/* </Link> */}
        </div>
        {error ? (
          <span className="py-4 text-red-600 font-bold self-end">
            حدث خطأ! الرجاء إعادة المحاولة
          </span>
        ) : null}
      </section>
    </main>
  );
};

export default AdminNewProductSecondPage;
