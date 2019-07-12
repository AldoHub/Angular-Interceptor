import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

//interceptors
import { GETInterceptor } from "./interceptors/GET_interceptor";
import { POSTInterceptor } from "./interceptors/POST_interceptor";
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GETInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: POSTInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
