export interface HomeCategorie {
  id: number;
  name: string;
  imagePath: string;
  subCategories: SubCategory[];
}

export interface SubCategory {
  id: number;
  name: string;
  imagePath: string;
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  mainImagePath: string;
  subCategoryName: string;
  warehouseCode: string;
}
