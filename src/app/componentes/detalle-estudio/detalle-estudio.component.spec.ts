import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyDetailComponent } from './detalle-estudio.component';
import { Router,Route } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudyService } from 'src/app/servicios/estudio.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('StudyDetailComponent', () => {
  let component: StudyDetailComponent;
  let fixture: ComponentFixture<StudyDetailComponent>;

  beforeEach(async(() => {
    let service: StudyService;

    const serviceMock = jasmine.createSpyObj('StudyService');
    TestBed.configureTestingModule({
      declarations: [ StudyDetailComponent],
      providers: [Router,{ provide: StudyService, useValue: serviceMock }],
     
      imports : [HttpClientTestingModule],
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
