import {UserBindingModel} from "./user-binding-model";
import {OrderedProductsModel} from "./ordered-products.model";

export interface OrderModel {
  id: number,
  buyer: UserBindingModel,
  orderedProducts: OrderedProductsModel[],
  createdAt: string,
}

