import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstudiosComponent } from './lista-estudios.component';

describe('ListaEstudiosComponent', () => {
  let component: ListaEstudiosComponent;
  let fixture: ComponentFixture<ListaEstudiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEstudiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
