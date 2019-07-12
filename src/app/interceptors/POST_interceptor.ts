import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
 
@Injectable()
export class POSTInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(
          tap((event: HttpEvent<any>) => {
              if (event instanceof HttpResponse) {
                  // Handle the request, add headers or else in this place
                  console.log(event);
              }
          }, (err: any) => {
              if (err instanceof HttpErrorResponse) {
                  switch (err.status) {
                      case 404:
                          console.log('-----> NOT FOUND');
                          break;
                      default:
                          console.log('ERROR -----> (' + err.status + '): ' + err.statusText);
                          break;
                  }
              }
          })
      );
  }
}