import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DziewczynyComponent } from './dziewczyny.component';

describe('DziewczynyComponent', () => {
  let component: DziewczynyComponent;
  let fixture: ComponentFixture<DziewczynyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DziewczynyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DziewczynyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
