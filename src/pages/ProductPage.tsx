import {
  ProductListHorizontal,
  ProductDetailsCard,
  MainPadding,
  SectionTitles,
  useApi,
  useParams,
} from "..";
import { subCategories } from "../assets/json/subCategories";
import { Product } from "../models/Product";
import { useState } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useApi<Product>(`Products/${id}`);
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);

  const toggleDescription = () => {
    setDescriptionOpen(!isDescriptionOpen);
  };

  return (
    <main>
      <MainPadding>
        <SectionTitles
          title01={subCategories[data?.id || 0].name || ""}
          title02={subCategories[data?.subCategoryId || 0].name || ""}
          endTitle={data?.name}
        />
        <section className="flex justify-center items-center my-16">
          {isLoading ? (
            <span className="text-4xl font-bold">جاري التحميل...</span>
          ) : error ? (
            <ProductDetailsCard />
          ) : data ? (
            <ProductDetailsCard data={data} />
          ) : null}
        </section>

        <section className="flex flex-col gap-8 py-8">
          <h1
            onClick={toggleDescription}
            className="text-2xl font-bold max-lg:text-xl cursor-pointer"
          >
            الوصف {isDescriptionOpen ? "▲" : "▼"}
          </h1>
          {isDescriptionOpen && (
            <p className="text-2xl max-lg:text-lg">{data?.description}</p>
          )}
        </section>

        <section className="py-8">
          <h1 className="text-3xl font-bold mb-8">منتجات متشابهة</h1>
          <ProductListHorizontal />
          {/* <LeftRightButtonsCircle /> */}
        </section>
      </MainPadding>
    </main>
  );
};

export default ProductPage;
