import { useState, useEffect } from "react";
import {
  ButtonGold,
  CategoryCard,
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

  const [criteriaTitle, setCriteriaTitle] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedCategoryNames, setSelectedCategoryNames] = useState<string[]>(
    []
  );

  // Save to localStorage whenever the criteriaTitle, selectedCategories, or selectedCategoryNames change
  useEffect(() => {
    if (criteriaTitle) {
      localStorage.setItem("criteriaTitle", criteriaTitle);
    }
  }, [criteriaTitle]);

  useEffect(() => {
    if (selectedCategories.length > 0) {
      localStorage.setItem(
        "selectedCategories",
        JSON.stringify(selectedCategories)
      );
    }
    if (selectedCategoryNames.length > 0) {
      localStorage.setItem(
        "selectedCategoryNames",
        JSON.stringify(selectedCategoryNames)
      );
    }
  }, [selectedCategories, selectedCategoryNames]);

  const handleCategorySelect = (categoryId: number, categoryName: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId]
    );

    setSelectedCategoryNames((prevNames) =>
      prevNames.includes(categoryName)
        ? prevNames.filter((name) => name !== categoryName)
        : [...prevNames, categoryName]
    );
  };

  // Retrieve from localStorage on initial load
  useEffect(() => {
    const savedTitle = localStorage.getItem("criteriaTitle");
    const savedCategories = localStorage.getItem("selectedCategories");
    const savedCategoryNames = localStorage.getItem("selectedCategoryNames");

    if (savedTitle) {
      setCriteriaTitle(savedTitle);
    }

    if (savedCategories) {
      setSelectedCategories(JSON.parse(savedCategories));
    }

    if (savedCategoryNames) {
      setSelectedCategoryNames(JSON.parse(savedCategoryNames));
    }
  }, []);

  return (
    <main>
      <MainPadding>
        <h1 className="text-2xl font-bold">طرح كراسة</h1>
        <section className="py-8">
          <h2 className="text-xl">عنوان الكراسة</h2>
          <div className="w-1/2 max-lg:w-full">
            <TextInput
              value={criteriaTitle}
              onChange={(e) => setCriteriaTitle(e.target.value)}
              placeholder="أدخل عنوان الكراسة"
            />
          </div>
        </section>
        <h2 className="text-xl">التصنيفات</h2>
        <section className="py-4 overflow-hidden">
          <h3 className="text-gray-500 mb-8">حدد التصنيفات التي تبحث عنها</h3>
          <div className="flex flex-wrap gap-8">
            {isLoading ? (
              <span>جاري التحميل...</span>
            ) : error ? (
              <CategoryCard
                id={0}
                onClick={() => handleCategorySelect(0, "TEST")}
                selected={selectedCategories.includes(0)}
              >
                TEST
              </CategoryCard>
            ) : data ? (
              data.map((category) => (
                <CategoryCard
                  key={category.id}
                  id={category.id}
                  onClick={() =>
                    handleCategorySelect(category.id, category.name)
                  }
                  selected={selectedCategories.includes(category.id)}
                >
                  {category.name}
                </CategoryCard>
              ))
            ) : null}
          </div>
          {/* <CategoryListHorizontal /> */}
          {/* <CategoryListHorizontal /> */}
        </section>
        <div className="flex flex-col w-full">
          <div className="w-32 self-end max-lg:w-full max-lg:self-center">
            <Link to="confirm">
              <ButtonGold>التالي</ButtonGold>
            </Link>
          </div>
        </div>
      </MainPadding>
    </main>
  );
};

export default NewConditionPage;
