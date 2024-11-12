import {
  AirCondition,
  Bathroom,
  CategoriesButtonListHorizontal,
  Decors,
  Doors,
  Gypsum,
  Insulation,
  Nwafez,
  Paints,
  Panels,
  Parkeh,
  Porsalen,
  Rkham,
  Siramik,
  Stone,
  Switches,
} from "../..";

const AdminCategoriesPage = () => {
  // TODO DELETE
  // const temp = [1, 2];
  return (
    <main>
      <section className="pt-main px-main pb-4">
        <h1 className="text-4xl font-bold text-primary mb-8">التصنيفات</h1>
        <CategoriesButtonListHorizontal />
      </section>

      <hr />

      <section className="p-main">
        <Rkham />
        <Porsalen />
        <Siramik />
        <Parkeh />
        <Nwafez />
        <Decors />
        <Doors />
        <Panels />
        <Gypsum />
        <Stone />
        <Paints />
        <Insulation />
        <AirCondition />
        <Switches />
        <Bathroom />
        {/* TODO DELETE LOOP */}
        {/* {temp.map(() => (
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">الرخام</h1>
            <h2 className="text-4xl font-bold text-gray-500 mb-8">
              التصنيفات الفرعية
            </h2>
            <div className="flex gap-8">
              <Link to={"/admin/category/1"}>
                <CategoryCard img={categoryImg01} num="">
                  رخام الأرضيات الداخلية والخارجية
                </CategoryCard>
              </Link>
              <CategoryCard img={categoryImg02} num="">
                رخام المطابخ والحمامات
              </CategoryCard>
              <CategoryCard img={categoryImg03} num="">
                رخام الجدران
              </CategoryCard>
              <CategoryCard img={categoryImg04} num="">
                رخام الواجهات
              </CategoryCard>
            </div>
          </div>
        ))} */}
      </section>
    </main>
  );
};

export default AdminCategoriesPage;
