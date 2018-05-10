import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EskuvoComponent } from './eskuvo.component';

describe('EskuvoComponent', () => {
  let component: EskuvoComponent;
  let fixture: ComponentFixture<EskuvoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EskuvoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EskuvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
