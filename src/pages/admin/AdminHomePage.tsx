import {
  CategoriesButtonListHorizontal,
  PaginationButtons,
  ProductCard,
} from "../..";

const AdminHomePage = () => {
  // TODO DELETE
  const temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <main className="p-main">
      <h1 className="text-4xl font-bold text-primary mb-8">المنتجات</h1>
      <CategoriesButtonListHorizontal />
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap mt-8 gap-8">
          {/* TODO DELETE LOOP */}
          {temp.map(() => (
            <ProductCard />
          ))}
        </div>
        <PaginationButtons />
      </div>
    </main>
  );
};

export default AdminHomePage;
