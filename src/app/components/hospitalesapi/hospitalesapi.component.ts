import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital';
import { ServiceHospitales } from '../../services/service.hospitales';

@Component({
  selector: 'app-hospitalesapi',
  templateUrl: './hospitalesapi.component.html',
  styleUrl: './hospitalesapi.component.css',
})
export class HospitalesapiComponent implements OnInit {
  public hospitales!: Array<Hospital>;
  constructor(private _service: ServiceHospitales) {}

  ngOnInit(): void {
    this._service.getHospitales().subscribe((response) => {
      console.log('leyendo');
      this.hospitales = response;
    });
  }
}
