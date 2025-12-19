import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Row3Component } from './row3-component';

describe('Row3Component', () => {
  let component: Row3Component;
  let fixture: ComponentFixture<Row3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Row3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Row3Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
