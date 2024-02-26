import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {SnackbarService} from "./SnackbarService";
import {Observable} from "rxjs";
import {OrderModel} from "../models/order.model";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  constructor(private http: HttpClient,
              private snackbarService: SnackbarService) {
  }

  _order() {
    this.snackbarService.openErrorSnackbar('Ordered successfully', 'success')
    return this.http.post(environment.baseUrl + "/orders", {}).subscribe();
  }

  _getAllOrders(): Observable<OrderModel[]> {
    return this.http.get<OrderModel[]>(environment.baseUrl + "/orders")
  }
}
