import { Injectable } from "@angular/core";
import { SessionService } from "./session.service";
import { BackendService } from "./backend.service";
import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Injectable({
  providedIn: 'root'
})

export class RequestInterceptor {

  constructor(private sessionService: SessionService,
              private router: Router,
              private location: Location) {
  }

  private requestWithAuthToken(request: HttpRequest<any>): HttpRequest<any> {
    const token = this.sessionService.getToken();
    if (!token) {
      return request;
    } else {
      return request.clone({setHeaders: {'Authentication': token}});
    }
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let nextRequest = this.requestWithAuthToken(request);
    return next.handle(nextRequest).pipe(catchError((err, caught) => {
      switch (err.status) {
        case 401:
          this.router.navigate(['/auth/login'], {queryParams: {redirect: this.location.path()}});
          return throwError(err);
        default:
          return throwError(err);
      }
    }));
  }

}
