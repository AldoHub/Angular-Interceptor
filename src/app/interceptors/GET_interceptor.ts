import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable()
export class GETInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
      //we clone the request
      //then we modify it to limit the number of elements to 10
      request = request.clone({
          url: request.url + '?_limit=10'
      });
 
      return next.handle(request);
    }
}