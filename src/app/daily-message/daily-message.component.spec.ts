import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyMessageComponent } from './daily-message.component';

describe('DailyMessageComponent', () => {
  let component: DailyMessageComponent;
  let fixture: ComponentFixture<DailyMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
