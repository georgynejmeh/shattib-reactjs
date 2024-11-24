import {
  ButtonGold,
  Link,
  NewProductHeaderText,
  TextInput,
  useApi,
  useState,
} from "../..";
import { Subcateogry } from "../../models/Subcategory";
import { MyFormData } from "./AdminNewProductContainer";

interface Props {
  formData: MyFormData;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSelectChange: (value: number) => void;
}

const AdminNewProductPage: React.FC<Props> = ({
  formData,
  onInputChange,
  handleSelectChange,
}) => {
  // Function to check if all required fields are filled
  const isFormValid = () => {
    return (
      formData.Name !== "" &&
      formData.WareHouseCode !== "" &&
      formData.Price !== 0 &&
      formData.SubCategoryId !== undefined &&
      formData.Description !== "" &&
      formData.Brand !== "" &&
      formData.MeasurementUnit !== "" &&
      formData.Measurements !== "" &&
      formData.ManufacturingCountry !== "" &&
      formData.Color !== ""
    );
  };

  const { data } = useApi<Subcateogry[]>("SeededValues/SubCategories");
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = data
    ? data.filter((subCategory) =>
        subCategory.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
  // Filter the subcategories based on the search term

  return (
    <main className="overflow-x-hidden">
      <NewProductHeaderText />

      <main className="flex flex-col gap-4 px-main pt-main pb-8">
        <section>
          <div className="flex w-full gap-4">
            <div className="w-full">
              <TextInput
                blackTitle
                title="اسم المنتج"
                placeholder="أدخل اسم المنتج"
                name="Name"
                value={formData.Name}
                onChange={onInputChange}
              />
            </div>
            <div className="w-full">
              <TextInput
                blackTitle
                title="رمز التخزين في شطب"
                placeholder="أدخل رمز التخزين"
                name="WareHouseCode"
                value={formData.WareHouseCode}
                onChange={onInputChange}
              />
            </div>
            <div className="w-full">
              <TextInput
                blackTitle
                title="سعر المنتج"
                placeholder="0.0 ريال"
                name="Price"
                number
                value={formData.Price.toString()}
                onChange={onInputChange}
              />
            </div>
            <div className="w-full">
              <label className={"flex self-start my-2 text-sm"}>
                الصنف الفرعي
              </label>
              <div className="relative">
                {/* Search Input */}
                <input
                  type="text"
                  placeholder="ابحث عن صنف..."
                  className="mb-2 px-3 py-2 w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Select Dropdown */}
                <select
                  name="SubCategoryId"
                  id="SubCategoryId"
                  className="px-3 py-2 w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={(e) => {
                    handleSelectChange(parseInt(e.target.value));
                  }}
                  value={formData.SubCategoryId}
                >
                  <option value="">اختر الصنف الفرعي</option>
                  {filteredData.length > 0 ? (
                    filteredData.map((subCategory) => (
                      <option key={subCategory.id} value={subCategory.id}>
                        {subCategory.name}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      لا توجد نتائج
                    </option>
                  )}
                </select>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex w-full gap-4 h-48">
            <div className="w-2/3">
              <TextInput
                big
                blackTitle
                title="وصف المنتج"
                name="Description"
                value={formData.Description}
                onChange={onInputChange}
              />
            </div>
            <div className="w-1/3">
              <TextInput
                big
                blackTitle
                title="الشركة المصنعة"
                placeholder="اسم الشركة المصنعة"
                name="Brand"
                value={formData.Brand}
                onChange={onInputChange}
              />
            </div>
          </div>
        </section>
        <section>
          <div className="flex w-full gap-4">
            {/* <div className="w-full">
              <TextInput
                blackTitle
                title="الكمية المتوفرة"
                placeholder="أدخل الكمية المتوفرة"
              />
            </div> */}
            <div className="w-full">
              <TextInput
                blackTitle
                title="وحدة القياس"
                placeholder="أدخل وحدة القياس"
                name="MeasurementUnit"
                value={formData.MeasurementUnit}
                onChange={onInputChange}
              />
            </div>
            <div className="w-full">
              <TextInput
                blackTitle
                title="القياس"
                placeholder="أدخل قياس المنتج"
                name="Measurements"
                value={formData.Measurements}
                onChange={onInputChange}
              />
            </div>
          </div>
        </section>
        <section>
          <div className="flex w-full gap-4">
            {/* <div className="w-full">
              <TextInput
                blackTitle
                title="المواصفات"
                placeholder="مواصفات المنتج"
              />
            </div> */}
            <div className="w-full">
              <TextInput
                blackTitle
                title="بلد التصنيع"
                placeholder="بلد التصنيع "
                name="ManufacturingCountry"
                value={formData.ManufacturingCountry}
                onChange={onInputChange}
              />
            </div>
            <div className="w-full">
              <TextInput
                blackTitle
                title="اللون"
                placeholder="لون المنتج"
                name="Color"
                value={formData.Color}
                onChange={onInputChange}
              />
            </div>
          </div>
        </section>

        <div className="w-32 self-end pt-4">
          <Link to={"/admin/product/new/2"}>
            <ButtonGold disabled={!isFormValid()}>التالي</ButtonGold>
          </Link>
        </div>
      </main>
    </main>
  );
};

export default AdminNewProductPage;
