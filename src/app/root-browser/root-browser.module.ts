import { NgModule } from '@angular/core';

import { RootBrowserRoutingModule } from './root-browser-routing.module';
import { RootDefaultComponent } from './components/root-default/root-default.component';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Error404Component } from './components/error404/error404.component';
import { AppGenericsModule } from "../app-generics/app-generics.module";
import { BlogService } from "./services/blog.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BackendService } from "./services/backend.service";
import { SessionService } from "./services/session.service";
import { AuthenticationGuard } from "./guards/authentication.guard";
import { UserService } from "../app-core/services/user.service";
import { RequestInterceptor } from "./services/request-interceptor";


@NgModule({
  declarations: [
    RootDefaultComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RootBrowserRoutingModule,
    AppGenericsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    BlogService,
    BackendService,
    SessionService,
    AuthenticationGuard,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [
    RootDefaultComponent
  ]
})
export class RootBrowserModule {

}
