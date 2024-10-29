import { ButtonGold, Link, NewProductHeaderText, TextInput } from "../..";

const AdminNewProductPage = () => {
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
              />
            </div>
            <div className="w-full">
              <TextInput
                blackTitle
                title="رمز التخزين في شطب"
                placeholder="أدخل رمز التخزين"
              />
            </div>
            <div className="w-full">
              <TextInput
                blackTitle
                title="تكلفة المنتج"
                placeholder="0.0 ريال"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="flex w-full gap-4 h-48">
            <div className="w-2/3">
              <TextInput big blackTitle title="وصف المنتج" />
            </div>
            <div className="w-1/3">
              <TextInput
                big
                blackTitle
                title="مميزات المنتج"
                placeholder="مميزات المنتج"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="flex w-full gap-4">
            <div className="w-full">
              <TextInput
                blackTitle
                title="الكمية المتوفرة"
                placeholder="أدخل الكمية المتوفرة"
              />
            </div>
            <div className="w-full">
              <TextInput
                blackTitle
                title="وحدة القياس"
                placeholder="أدخل وحدة القياس"
              />
            </div>
            <div className="w-full">
              <TextInput
                blackTitle
                title="القياس"
                placeholder="أدخل قياس المنتج"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="flex w-full gap-4">
            <div className="w-full">
              <TextInput
                blackTitle
                title="المواصفات"
                placeholder="مواصفات المنتج"
              />
            </div>
            <div className="w-full">
              <TextInput
                blackTitle
                title="بلد التصنيع"
                placeholder="بلد التصنيع "
              />
            </div>
            <div className="w-full">
              <TextInput blackTitle title="اللون" placeholder="لون المنتج" />
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
