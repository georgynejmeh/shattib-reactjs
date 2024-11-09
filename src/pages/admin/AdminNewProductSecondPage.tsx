import {
  ButtonGold,
  Link,
  Navigate,
  NewProductHeaderText,
  TextInput,
  UploadFile,
  usePostForm,
} from "../..";
import { MyFormData } from "./AdminNewProductContainer";

interface Props {
  formData: MyFormData;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  setFormData: React.Dispatch<React.SetStateAction<MyFormData>>;
}

const AdminNewProductSecondPage = ({
  formData,
  onInputChange,
  setFormData,
}: Props) => {
  const { postData, isLoading, error, data } = usePostForm("Products", "POST");

  // const handleSubmit = async () => {
  //   const formDataToSend = new FormData();

  //   // Append form data to FormData object
  //   for (const key in formData) {
  //     if (Object.prototype.hasOwnProperty.call(formData, key)) {
  //       const value = formData[key as keyof MyFormData];
  //       if (value instanceof File) {
  //         // If the value is a file (e.g., Images), append it as FormData
  //         formDataToSend.append(key, value);
  //       } else {
  //         // Otherwise, append it as a regular form field
  //         formDataToSend.append(key, value as string);
  //       }
  //     }
  //   }

  //   // Use the API hook to send the data
  //   postData(formDataToSend);
  // };

  // const handleImageChange = (image: File) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     Images: image ? [image] : [], // Store image in an array or pass multiple files if needed
  //   }));
  // };

  const handleSubmit = async () => {
    const formDataToSend = new FormData();

    // Append form data to FormData object
    for (const key in formData) {
      if (Object.prototype.hasOwnProperty.call(formData, key)) {
        const value = formData[key as keyof MyFormData];
        if (value instanceof File) {
          // If the value is a file (e.g., Images), append it as FormData
          formDataToSend.append(key, value);
        } else if (Array.isArray(value)) {
          // If the value is an array (e.g., Images), iterate over the array and append each file
          value.forEach((file) => formDataToSend.append(key, file));
        } else {
          // Otherwise, append it as a regular form field
          formDataToSend.append(key, value as string);
        }
      }
    }

    // Use the API hook to send the data
    postData(formDataToSend);
  };

  const handleImageChange = (image: File) => {
    setFormData((prevData) => ({
      ...prevData,
      Images: [image], // Store image in an array, even if only one image is selected
    }));
  };

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
              name="Deaf"
              value={formData.Deaf}
              onChange={onInputChange}
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
          {/* <div className="w-full">
            <TextInput
              big
              blackTitle
              title="شهادات هيئة المقاييس والجودة"
              placeholder="أضف شهادات المنتج إن وجدت"
            />
          </div> */}
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
          <UploadFile
            title="صورة المنتج"
            subTitle="ارفع صورة المنتج"
            onImageChange={handleImageChange}
          />
        </div>

        <div className="flex w-80 gap-4 self-end mt-8">
          <Link className="w-full" to={"/admin/product/new"}>
            <button className="rounded bg-gray-200 w-full text-lg font-medium py-1">
              السابق
            </button>
          </Link>
          {/* <Link className="w-full" to={"/admin/product/new"}> */}
          <ButtonGold onClick={handleSubmit}>
            {/* <ButtonGold onClick={() => postData(formData)}> */}
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
