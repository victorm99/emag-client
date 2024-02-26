export interface FilterBindingModel {
  subcategoryId?: number;
  searchKeyword?: string;
  brand?: string;
  model?: string;
  maxPrice?: number;
  minPrice?: number;
  discountedOnly?: boolean;
  orderByPrice?: boolean;
  sortDesc?: boolean;
  productsPerPage?: number;
  pageNumber?: number;
}
