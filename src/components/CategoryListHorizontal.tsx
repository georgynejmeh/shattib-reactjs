import { CategoryCard, categoryImg01, categoryImg02, categoryImg03 } from ".";

const CategoryListHorizontal = () => {
  return (
    <div className="inline-flex py-4 gap-8">
      <CategoryCard img={categoryImg01} num="8">
        ألواح خشبية
      </CategoryCard>
      <CategoryCard img={categoryImg02} num="8">
        الغراء والترويبة
      </CategoryCard>
      <CategoryCard img={categoryImg03} num="8">
        السيليكون واللواصق
      </CategoryCard>
      <CategoryCard img={categoryImg01} num="8">
        ألواح خشبية
      </CategoryCard>
      <CategoryCard img={categoryImg02} num="8">
        الغراء والترويبة
      </CategoryCard>
      <CategoryCard img={categoryImg03} num="8">
        السيليكون واللواصق
      </CategoryCard>
    </div>
  );
};

export default CategoryListHorizontal;
