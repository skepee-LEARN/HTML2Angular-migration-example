import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBreaksfastComponent } from './card-breaksfast.component';

describe('CardBreaksfastComponent', () => {
  let component: CardBreaksfastComponent;
  let fixture: ComponentFixture<CardBreaksfastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBreaksfastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBreaksfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
