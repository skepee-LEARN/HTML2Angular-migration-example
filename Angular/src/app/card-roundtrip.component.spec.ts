import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRoundtripComponent } from './card-roundtrip.component';

describe('CardRoundtripComponent', () => {
  let component: CardRoundtripComponent;
  let fixture: ComponentFixture<CardRoundtripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRoundtripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRoundtripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
