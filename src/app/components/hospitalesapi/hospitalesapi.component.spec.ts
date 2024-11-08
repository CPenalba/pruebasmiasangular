import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalesapiComponent } from './hospitalesapi.component';

describe('HospitalesapiComponent', () => {
  let component: HospitalesapiComponent;
  let fixture: ComponentFixture<HospitalesapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HospitalesapiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalesapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
