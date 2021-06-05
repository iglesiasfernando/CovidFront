import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEstudioComponent } from './detalle-estudio.component';
import { Router,Route } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudyService } from 'src/app/servicios/estudio.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DetalleEstudioComponent', () => {
  let component: DetalleEstudioComponent;
  let fixture: ComponentFixture<DetalleEstudioComponent>;

  beforeEach(async(() => {
    let service: StudyService;

    const serviceMock = jasmine.createSpyObj('StudyService');
    TestBed.configureTestingModule({
      declarations: [ DetalleEstudioComponent],
      providers: [Router,{ provide: StudyService, useValue: serviceMock }],
     
      imports : [HttpClientTestingModule],
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
