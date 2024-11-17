import {
  ButtonGold,
  closeCircleIcon,
  TextInput,
  UploadFile,
  usePostForm,
  useState,
} from "..";
import { useRkhamCustomMeasure } from "../hooks/useRkhamCustomMeasure";

const RkhamCustomMeasurePopup = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [thickness, setThickness] = useState("");
  const [measurementUnit, setMeasurementUnit] = useState("");
  const [details, setDetails] = useState("");

  const { postData, isLoading, error, data } = usePostForm(
    "CustomRhkam",
    "POST"
  );
  const { isShownRkahmCustomMeasureModal, setIsShownRkahmCustomMeasureModal } =
    useRkhamCustomMeasure();

  const [image, setImage] = useState<File | null>(null);

  function handleImageChange(image: File) {
    setImage(image);
  }

  const form = new FormData();

  async function handleFormSend() {
    form.append("width", width);
    form.append("height", height);
    form.append("thickness", thickness);
    form.append("measurementUnit", measurementUnit);
    form.append("details", details);
    form.append("image", image!);
    console.log(image);
    console.log(form.values);

    await postData(form);
    setIsShownRkahmCustomMeasureModal(false);
  }
  if (isShownRkahmCustomMeasureModal) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      {data && setIsShownRkahmCustomMeasureModal(false)}
      {isShownRkahmCustomMeasureModal ? (
        <main className="fixed z-50 flex justify-center items-center top-0 w-full h-full bg-black bg-opacity-50">
          <div className="flex flex-col border bg-white w-4/5 h-5/6 rounded-xl p-8">
            <div className="flex w-full justify-between">
              <h1 className="text-2xl font-bold">طلب قياس مخصص من الرخام</h1>
              <button onClick={() => setIsShownRkahmCustomMeasureModal(false)}>
                <img src={closeCircleIcon} alt="" />
              </button>
            </div>

            <hr className="my-4" />

            <h2 className="font-bold">المعلومات الأساسية</h2>

            <div className="flex gap-4">
              <div className="w-full">
                <TextInput
                  blackTitle
                  title="الطول"
                  placeholder="أدخل الطول"
                  onChange={(e) => {
                    setHeight(e.target.value);
                  }}
                />
              </div>
              <div className="w-full">
                <TextInput
                  blackTitle
                  title="العرض"
                  placeholder="أدخل العرض"
                  onChange={(e) => {
                    setWidth(e.target.value);
                  }}
                />
              </div>
              <div className="w-full">
                <TextInput
                  blackTitle
                  title="السماكة"
                  placeholder="أدخل السماكة"
                  onChange={(e) => {
                    setThickness(e.target.value);
                  }}
                />
              </div>
              <div className="w-full">
                <TextInput
                  blackTitle
                  title="الواحدة"
                  placeholder="أدخل الواحدة"
                  onChange={(e) => {
                    setMeasurementUnit(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="flex gap-4 my-16">
              <div className="w-3/4">
                <TextInput
                  big
                  blackTitle
                  title="تفاصيل أخرى"
                  placeholder="أدخل معلومات وتفاصيل أكثر عن النوعية"
                  onChange={(e) => {
                    setDetails(e.target.value);
                  }}
                />
              </div>
              <div className="w-1/4 max-h-28 px-4">
                <UploadFile
                  containImg
                  onImageChange={handleImageChange}
                  title="إضافة ملف"
                  subTitle="أضف ملف أو صورة"
                />
              </div>
            </div>

            <div className="flex gap-4 self-end">
              <button
                onClick={() => setIsShownRkahmCustomMeasureModal(false)}
                className="w-36 rounded py-1 px-3 bg-gray-200 "
              >
                إلغاء
              </button>
              <div className="w-40">
                <ButtonGold onClick={handleFormSend}>
                  {isLoading
                    ? "جاري الإرسال..."
                    : error
                    ? "إعادة المحاولة!"
                    : "إرسال"}
                </ButtonGold>
              </div>
            </div>
          </div>
        </main>
      ) : null}
    </>
  );
};

export default RkhamCustomMeasurePopup;
