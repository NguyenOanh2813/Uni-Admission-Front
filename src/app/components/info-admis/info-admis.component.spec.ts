import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAdmisComponent } from './info-admis.component';

describe('InfoAdmisComponent', () => {
  let component: InfoAdmisComponent;
  let fixture: ComponentFixture<InfoAdmisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAdmisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAdmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
