import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyListComponent } from './lista-estudios.component';

describe('StudyListComponent', () => {
  let component: StudyListComponent;
  let fixture: ComponentFixture<StudyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
