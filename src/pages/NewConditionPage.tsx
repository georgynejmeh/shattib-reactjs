import {
  ButtonGold,
  CategoryCard,
  categoryImg01,
  CategoryListHorizontal,
  Link,
  MainPadding,
  TextInput,
  useApi,
} from "..";
import { Category } from "../models/Category";

const NewConditionPage = () => {
  const { isLoading, error, data } = useApi<Category[]>(
    "SeededValues/Categories"
  );
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
          {isLoading ? (
            <span>جاري التحميل...</span>
          ) : error ? (
            <span>حدث خطأّ!</span>
          ) : data ? (
            data.map((category) => (
              <CategoryCard img={categoryImg01}>{category.name}</CategoryCard>
            ))
          ) : null}
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
