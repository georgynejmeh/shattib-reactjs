import {
  CategoriesButtonListHorizontal,
  PaginationButtons,
  ProductCard,
  useApi,
} from "../..";
import { ProductHomePage } from "../../models/Product";

const AdminHomePage = () => {
  const { isLoading, error, data } = useApi<ProductHomePage[]>("Products");
  return (
    <main className="p-main">
      <h1 className="text-4xl font-bold text-primary mb-8">المنتجات</h1>
      <CategoriesButtonListHorizontal />
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap mt-8 gap-8">
          {/* TODO DELETE LOOP */}
          {isLoading ? (
            <ProductCard />
          ) : error ? (
            <ProductCard name="حدث خطأ!" />
          ) : data ? (
            data.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
              />
            ))
          ) : (
            <ProductCard name=" " />
          )}
        </div>
        <PaginationButtons />
      </div>
    </main>
  );
};

export default AdminHomePage;
