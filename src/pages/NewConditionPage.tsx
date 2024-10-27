import {
  ButtonGold,
  CategoryListHorizontal,
  Link,
  MainPadding,
  TextInput,
} from "..";

const NewConditionPage = () => {
  return (
    <main>
      <MainPadding>
        <h1 className="text-2xl font-bold">طرح كراسة</h1>
        <section className="py-8">
          <h2 className="text-xl">عنوان الكراسة</h2>
          <div className="w-1/2">
            <TextInput placeholder="أدخل عنوان الكراسة" />
          </div>
        </section>
        <h2 className="text-xl">التصنيفات</h2>
        <section className="py-4 overflow-hidden">
          <h3 className="text-gray-500">حدد التصنيفات التي تبحث عنها</h3>
          <CategoryListHorizontal />
          <CategoryListHorizontal />
        </section>
        <div className="flex flex-col w-full">
          <div className="w-32 self-end">
            <Link to={"confirm"}>
              <ButtonGold>التالي</ButtonGold>
            </Link>
          </div>
        </div>
      </MainPadding>
    </main>
  );
};

export default NewConditionPage;
