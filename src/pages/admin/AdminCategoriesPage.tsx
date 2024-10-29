import {
  CategoriesButtonListHorizontal,
  CategoryCard,
  categoryImg01,
  categoryImg02,
  categoryImg03,
  categoryImg04,
  Link,
} from "../..";

const AdminCategoriesPage = () => {
  // TODO DELETE
  const temp = [1, 2];
  return (
    <main>
      <section className="pt-main px-main pb-4">
        <h1 className="text-4xl font-bold text-primary mb-8">التصنيفات</h1>
        <CategoriesButtonListHorizontal />
      </section>

      <hr />

      <section className="p-main">
        {/* TODO DELETE LOOP */}
        {temp.map(() => (
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">الرخام</h1>
            <div className="flex gap-4 mb-8">
              <h2 className="text-4xl font-bold text-gray-500">
                التصنيفات الفرعية
              </h2>
              <h2 className="text-4xl font-bold text-gray-300">4</h2>
            </div>
            <div className="flex gap-8">
              <Link to={"/admin/category/1"}>
                <CategoryCard img={categoryImg01} num="8">
                  رخام الأرضيات الداخلية والخارجية
                </CategoryCard>
              </Link>
              <CategoryCard img={categoryImg02} num="8">
                رخام المطابخ والحمامات
              </CategoryCard>
              <CategoryCard img={categoryImg03} num="8">
                رخام الجدران
              </CategoryCard>
              <CategoryCard img={categoryImg04} num="8">
                رخام الواجهات
              </CategoryCard>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default AdminCategoriesPage;
