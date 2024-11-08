import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { HospitalesapiComponent } from './components/hospitalesapi/hospitalesapi.component';
import { appRoutingProvider, routing } from './app.routing';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HospitalesapiComponent,
  ],
  imports: [BrowserModule, routing],
  providers: [appRoutingProvider, provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
