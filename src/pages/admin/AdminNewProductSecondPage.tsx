import React, { useState } from "react";
import {
  ButtonGold,
  Link,
  Navigate,
  NewProductHeaderText,
  TextInput,
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
  const { postData, isLoading, error, data } = usePostForm<Response>(
    "Products",
    "POST"
  );

  // Local state for dynamic specifications
  const [specifications, setSpecifications] = useState<
    { name: string; value: string }[]
  >([]);

  // Ensure formData.Images is initialized as an empty array if not present
  const images = formData.Images || [];

  // Handle image selection (multiple files)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files); // Convert FileList to an array
      setFormData((prevData) => ({
        ...prevData,
        Images: [...(prevData.Images || []), ...newImages], // Ensure Images is always an array
      }));
    }
  };

  // Handle adding a specification
  const handleAddSpecification = () => {
    setSpecifications((prevSpecs) => [
      ...prevSpecs,
      { name: "", value: "" }, // Add an empty specification to allow user to fill in
    ]);
  };

  // Handle specification input change
  const handleSpecificationChange = (
    index: number,
    field: "name" | "value",
    value: string
  ) => {
    const updatedSpecifications = [...specifications];
    updatedSpecifications[index][field] = value;
    setSpecifications(updatedSpecifications);
  };

  // Handle specification deletion
  const handleRemoveSpecification = (index: number) => {
    setSpecifications((prevSpecs) => prevSpecs.filter((_, i) => i !== index));
  };

  // Handle form submission
  const handleSubmit = async () => {
    const formDataToSend = new FormData();

    // Append standard form fields
    for (const key in formData) {
      if (Object.prototype.hasOwnProperty.call(formData, key)) {
        const value = formData[key as keyof MyFormData];
        if (value instanceof File) {
          formDataToSend.append(key, value);
        } else if (Array.isArray(value)) {
          value.forEach((file) => formDataToSend.append(key, file));
        } else {
          formDataToSend.append(key, value as string);
        }
      }
    }

    // Append the images as an array of files
    images.forEach((image) => {
      formDataToSend.append("Images[]", image); // Append each image as a separate FormData entry
    });

    // Append the specifications array
    specifications.forEach((spec) => {
      formDataToSend.append("Specifications[]", JSON.stringify(spec)); // Send each spec as a JSON string
    });

    // Post data to the API
    postData(formDataToSend);
  };

  const isFormValid = () => {
    const { Deaf, RetrivalAndReplacing, Notes, Images } = formData;
    return (
      Deaf.trim() !== "" &&
      RetrivalAndReplacing.trim() !== "" &&
      Notes.trim() !== "" &&
      (Images?.length ?? 0) > 0 && // Use optional chaining and nullish coalescing to handle undefined Images
      specifications.length >= 0
    );
  };

  return (
    <main className="overflow-x-hidden">
      {data && <Navigate to={"/admin/home"} />}

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
              title="سعر التركيب"
              placeholder="أدخل سعر التركيب"
              name="InstallationTeam"
              number
              value={formData.InstallationTeam.toString()}
              onChange={onInputChange}
            />
            <TextInput
              blackTitle
              title="الكلمات الدلالية"
              placeholder="كلمات دلالية حول المنتج"
              name="Keywords"
              value={formData.Keywords}
              onChange={onInputChange}
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
              title="الملاحظات"
              placeholder="ملاحظات إضافية"
              name="Notes"
              value={formData.Notes}
              onChange={onInputChange}
            />
          </div>
        </div>

        {/* Image Upload Section */}
        <div className="w-full mt-8">
          <label className="block text-lg">رفع الصور</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="mt-2 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Display uploaded images */}
        <div className="w-full mt-8">
          <h3 className="text-xl font-bold">الصور المرفوعة:</h3>
          <div className="flex gap-4 mt-4">
            {images.map((image, index) => (
              <div key={index} className="relative w-32 h-32">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`uploaded-image-${index}`}
                  className="w-full h-full object-cover rounded-md"
                />
                <button
                  className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                  onClick={() => {
                    setFormData((prevData) => ({
                      ...prevData,
                      Images: (prevData.Images || []).filter(
                        (_, i) => i !== index
                      ), // Default to empty array if Images is undefined
                    }));
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Specifications Section */}
        <div className="w-full mt-8">
          <h3 className="text-xl font-bold">إضافة المواصفات</h3>
          {specifications.map((spec, index) => (
            <div key={index} className="flex gap-4 mt-4">
              <input
                type="text"
                value={spec.name}
                onChange={(e) =>
                  handleSpecificationChange(index, "name", e.target.value)
                }
                placeholder="اسم الخيار"
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                value={spec.value}
                onChange={(e) =>
                  handleSpecificationChange(index, "value", e.target.value)
                }
                placeholder="القيمة"
                className="p-2 border border-gray-300 rounded-md"
              />
              <button
                className="bg-red-500 text-white rounded-md px-4 py-2"
                onClick={() => handleRemoveSpecification(index)}
              >
                حذف
              </button>
            </div>
          ))}
          <button
            className="mt-4 bg-green-500 text-white rounded-md px-4 py-2"
            onClick={handleAddSpecification}
          >
            إضافة خيار جديد
          </button>
        </div>

        <div className="flex w-80 gap-4 self-end mt-8">
          <Link className="w-full" to={"/admin/product/new"}>
            <button className="rounded bg-gray-200 w-full text-lg font-medium py-1">
              السابق
            </button>
          </Link>

          <ButtonGold disabled={!isFormValid()} onClick={handleSubmit}>
            {isLoading ? "التحميل..." : "أضف المنتج"}
          </ButtonGold>
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
