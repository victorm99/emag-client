import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {DiscountProductBindingModel} from "../models/discount-product-binding-model";

@Injectable({
  providedIn: "root"
})
export class DiscountService {
  constructor(private http: HttpClient) {
  }

  _makeDiscount(id: number, discount: DiscountProductBindingModel) {
    return this.http.post(environment.baseUrl + "/discounts/" + id, discount).subscribe()
  }
}
