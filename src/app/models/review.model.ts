import {ProductBindingModel} from "./product-binding-model";

export interface ReviewModel {
  product: ProductBindingModel,
  title: string,
  description: string,
  rating: number,
  createdAt: string
}
