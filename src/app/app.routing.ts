import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { HospitalesapiComponent } from './components/hospitalesapi/hospitalesapi.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hospitales', component: HospitalesapiComponent },

];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);