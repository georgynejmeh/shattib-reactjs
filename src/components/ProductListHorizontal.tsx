import { leftArrowIcon, ProductCard, useApi } from "..";
import { ProductHomePage } from "../models/Product";

const ProductListHorizontal = () => {
  const { isLoading, error, data } = useApi<ProductHomePage[]>("Products");
  return (
    <div className="relative">
      <div className="absolute z-10 -right-4 top-36 flex justify-between w-full">
        <button className="flex items-center justify-center rounded-full w-12 h-12 bg-white shadow-xl">
          <img className="-scale-x-100" src={leftArrowIcon} alt="" />
        </button>
        <button className="flex items-center justify-center rounded-full w-12 h-12 bg-white shadow-xl">
          <img src={leftArrowIcon} alt="" />
        </button>
      </div>

      <div className="flex py-4 gap-8 overflow-x-auto whitespace-nowrap no-scrollbar">
        {isLoading ? (
          <ProductCard />
        ) : error ? (
          <>
            <ProductCard />
            {console.log("Error: ", error)}
          </>
        ) : data ? (
          data.map((product) => (
            <div key={product.id}>
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                image={`${import.meta.env.VITE_IMG_URL}${
                  product.mainImagePath
                }`}
              />
            </div>
          ))
        ) : (
          <ProductCard />
        )}
      </div>
    </div>
  );
};

export default ProductListHorizontal;
