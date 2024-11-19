import { useTranslation } from "react-i18next";
import { CatDropdownItem, downArrowIcon, Link, useState } from "..";
import { categories } from "../assets/json/categories";
import { subCategories } from "../assets/json/subCategories";

const NavBarCategoriesSidebarMenu = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);
  const { t } = useTranslation();

  // Filter subcategories for the active category
  const getSubcategoriesByCategoryId = (categoryId: number) =>
    subCategories.filter((sub) => sub.categoryId === categoryId);

  return (
    <>
      {/* Trigger Button */}
      <div
        onClick={() => setSidebarOpen(true)}
        className="flex items-center cursor-pointer"
      >
        <span className="px-2">{t("categoriesTxt")}</span>
        <img className="w-4" src={downArrowIcon} alt="Open Sidebar" />
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50">
          <div className="relative w-4/5 max-w-sm h-full bg-white shadow-lg">
            {/* Sidebar Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold">{t("categoriesTxt")}</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>

            {/* Categories and Subcategories */}
            <div className="flex flex-col h-full overflow-y-auto">
              {/* Categories List */}
              <div className="p-4 border-b">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    onClick={() =>
                      setActiveCategoryId((prev) =>
                        prev === category.id ? null : category.id
                      )
                    }
                    className={`p-2 cursor-pointer ${
                      activeCategoryId === category.id
                        ? "bg-gray-200 font-bold"
                        : ""
                    }`}
                  >
                    <CatDropdownItem>{category.name}</CatDropdownItem>
                  </div>
                ))}
              </div>

              {/* Subcategories List */}
              <div className="flex-1 p-4">
                {activeCategoryId ? (
                  getSubcategoriesByCategoryId(activeCategoryId).length > 0 ? (
                    getSubcategoriesByCategoryId(activeCategoryId).map(
                      (subCategory) => (
                        <Link
                          key={subCategory.id}
                          to={`/category/${activeCategoryId}/${subCategory.id}`}
                          onClick={() => setSidebarOpen(false)} // Close sidebar after selecting
                        >
                          <CatDropdownItem showLeftIcon={false}>
                            {subCategory.name}
                          </CatDropdownItem>
                        </Link>
                      )
                    )
                  ) : (
                    <div className="text-gray-500">{t("noSubcategories")}</div>
                  )
                ) : (
                  <div className="text-gray-500">
                    {t("selectCategoryPrompt")}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBarCategoriesSidebarMenu;
