import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalityDeleteComponent } from './functionality-delete.component';

describe('FunctionalityDeleteComponent', () => {
  let component: FunctionalityDeleteComponent;
  let fixture: ComponentFixture<FunctionalityDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionalityDeleteComponent]
    });
    fixture = TestBed.createComponent(FunctionalityDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
