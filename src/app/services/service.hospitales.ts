import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ServiceHospitales {
  constructor(private _http: HttpClient) {}
  getHospitales(): Observable<any> {
    let urlApiHospitales =
      'https://apiejemplos.azurewebsites.net/api/Hospitales';
    return this._http.get(urlApiHospitales);
  }
}
