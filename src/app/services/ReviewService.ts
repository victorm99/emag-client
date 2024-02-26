import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReviewModel} from "../models/review.model";
import {environment} from "../../environments/environment";
import {SnackbarService} from "./SnackbarService";

@Injectable({
  providedIn: 'root',
})
export class ReviewService {

  constructor(private http: HttpClient,
              private snackbarService: SnackbarService) {
  }

  _getReviewsForProduct(id: number):Observable<ReviewModel[]> {
    return this.http.get<ReviewModel[]>(environment.baseUrl + "/product/"+id+"/reviews")
  }

  _addReview(id: number, review: ReviewModel) {
    this.snackbarService.openErrorSnackbar('Successfully added review', 'success')
    return this.http.post(environment.baseUrl + "/review/" + id, review).subscribe();
  }
}
