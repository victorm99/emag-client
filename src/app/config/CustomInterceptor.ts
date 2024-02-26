import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Injectable} from "@angular/core";
import {SnackbarService} from "../services/SnackbarService";

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor(private snackbarService: SnackbarService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      withCredentials: true
    });

    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.snackbarService.openErrorSnackbar(
            // @ts-ignore
            error.error.message,
            'error'
          );
          return throwError(error.message);
        })
      )
  }
}
