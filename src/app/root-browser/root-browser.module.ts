import { NgModule } from '@angular/core';

import { RootBrowserRoutingModule } from './root-browser-routing.module';
import { RootDefaultComponent } from './components/root-default/root-default.component';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { FruitCircleComponent } from './components/fruit-circle/fruit-circle.component';
import { FruitNormalComponent } from './components/fruit-normal/fruit-normal.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Error404Component } from './components/error404/error404.component';
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { CustomPropertyTestComponent } from './components/custom-property-test/custom-property-test.component';


@NgModule({
  declarations: [
    RootDefaultComponent,
    FruitCircleComponent,
    FruitNormalComponent,
    DashboardComponent,
    Error404Component,
    CustomPropertyTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RootBrowserRoutingModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [
    RootDefaultComponent
  ]
})
export class RootBrowserModule {

}
