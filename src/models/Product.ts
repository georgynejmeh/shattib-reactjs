export interface Product {
  id: number;
  subCategoryId: SubCategory["id"];
  categoryId: number;
  name: string;
  description: string;
  features: string;
  price: number;
  measurementUnit: string;
  measurements: string;
  manufacturingCountry: string;
  color: string;
  deaf: string;
  retrivalAndReplacing: string;
  notes: string;
  warehouseCode: string;
  images: Image[];
  productSpecifications: ProductSpecifications[];
}

export interface ProductHomePage {
  id: number;
  name: string;
  price: number;
  mainImagePath: string;
  warehouseCode: string;
  categoryId?: number;
}

interface Image {
  id: number;
  productId: number;
  imagePath: string;
}

interface SubCategory {
  id: number;
  name: string;
}

interface ProductSpecifications {
  name: string;
  value: string;
}
