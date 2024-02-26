import { ProductImageBindingModel } from './product-image-binding-model';
import { SubcategoryBindingModel } from './subcategory-binding-model';

export interface ProductsBindingModel {
  id: number;
  name: string;
  subCategory: SubcategoryBindingModel;
  brand: string;
  model: String;
  price: number;
  discountedPrice?: number;
  description: string;
  quantity: number;
  warrantyMonths: number;
  addedAt: Date;
  deletedAt: Date;
  productRating: number;
  productImages?: ProductImageBindingModel[];
}
