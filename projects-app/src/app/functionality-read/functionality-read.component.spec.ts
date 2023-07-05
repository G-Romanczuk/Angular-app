import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalityReadComponent } from './functionality-read.component';

describe('FunctionalityReadComponent', () => {
  let component: FunctionalityReadComponent;
  let fixture: ComponentFixture<FunctionalityReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionalityReadComponent]
    });
    fixture = TestBed.createComponent(FunctionalityReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
