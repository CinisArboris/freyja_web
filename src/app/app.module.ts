import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CfreyjaComponent } from './cfreyja/cfreyja.component';
import { HttpClientModule } from "@angular/common/http";
import { SfreyjaService } from './sfreyja.service';

import { ChartsModule, ThemeService } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    CfreyjaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    ChartsModule,
  ],
  providers: [
    SfreyjaService,
    ThemeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
