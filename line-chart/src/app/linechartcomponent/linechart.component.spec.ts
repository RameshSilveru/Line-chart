import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartcomponentComponent } from './linechart.component';

describe('LineChartcomponentComponent', () => {
  let component: LineChartcomponentComponent;
  let fixture: ComponentFixture<LineChartcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
