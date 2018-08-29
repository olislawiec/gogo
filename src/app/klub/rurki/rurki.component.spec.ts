import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RurkiComponent } from './rurki.component';

describe('RurkiComponent', () => {
  let component: RurkiComponent;
  let fixture: ComponentFixture<RurkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RurkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RurkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
