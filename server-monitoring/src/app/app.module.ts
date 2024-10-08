import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { Error404Component } from './error/404/error-404.component';
import { EnvironmentCurdServiceComponent } from './environment/curd/service/environment-curd-service.component';




@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    Error404Component,
    EnvironmentCurdServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
