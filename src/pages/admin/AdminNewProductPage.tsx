import { ButtonGold, Link, NewProductHeaderText, TextInput } from "../..";
import { MyFormData } from "./AdminNewProductContainer";

interface Props {
  formData: MyFormData;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const AdminNewProductPage: React.FC<Props> = ({ formData, onInputChange }) => {
  return (
    <main>
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
                title="تكلفة المنتج"
                placeholder="0.0 ريال"
                name="Price"
                value={formData.Price.toString()}
                onChange={onInputChange}
              />
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
                title="مميزات المنتج"
                placeholder="مميزات المنتج"
                name="Features"
                value={formData.Features}
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
                name="Meaurements"
                value={formData.Meaurements}
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
            <ButtonGold>التالي</ButtonGold>
          </Link>
        </div>
      </main>
    </main>
  );
};

export default AdminNewProductPage;
