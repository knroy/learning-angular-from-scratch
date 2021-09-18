import { NgModule } from '@angular/core';

import { RootBrowserRoutingModule } from './root-browser-routing.module';
import { RootDefaultComponent } from './components/root-default/root-default.component';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Error404Component } from './components/error404/error404.component';
import { AppGenericsModule } from "../app-generics/app-generics.module";
import { BlogService } from "./services/blog.service";
import { HttpClientModule } from "@angular/common/http";


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
    HttpClientModule
  ],
  providers: [
    BlogService
  ],
  bootstrap: [
    RootDefaultComponent
  ]
})
export class RootBrowserModule {

}
