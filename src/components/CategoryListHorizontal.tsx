import {
  CategoryCard,
  subCategoryImg01,
  subCategoryImg02,
  subCategoryImg03,
} from "..";

const CategoryListHorizontal = () => {
  return (
    <div className="flex py-4 gap-8 overflow-x-auto whitespace-nowrap no-scrollbar">
      <div>
        <CategoryCard img={subCategoryImg01} num="8">
          ألواح خشبية
        </CategoryCard>
      </div>

      <div>
        <CategoryCard img={subCategoryImg02} num="8">
          الغراء والترويبة
        </CategoryCard>
      </div>
      <div>
        <CategoryCard img={subCategoryImg03} num="8">
          السيليكون واللواصق
        </CategoryCard>
      </div>
      <div>
        <CategoryCard img={subCategoryImg01} num="8">
          ألواح خشبية
        </CategoryCard>
      </div>
      <div>
        <CategoryCard img={subCategoryImg02} num="8">
          الغراء والترويبة
        </CategoryCard>
      </div>
      <div>
        <CategoryCard img={subCategoryImg03} num="8">
          السيليكون واللواصق
        </CategoryCard>
      </div>
    </div>
  );
};

export default CategoryListHorizontal;
