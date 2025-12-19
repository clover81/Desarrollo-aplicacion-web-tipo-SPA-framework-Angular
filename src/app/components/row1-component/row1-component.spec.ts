import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Row1Component } from './row1-component';

describe('Row1Component', () => {
  let component: Row1Component;
  let fixture: ComponentFixture<Row1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Row1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Row1Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
