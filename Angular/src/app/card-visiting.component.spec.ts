import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVisitingComponent } from './card-visiting.component';

describe('CardVisitingComponent', () => {
  let component: CardVisitingComponent;
  let fixture: ComponentFixture<CardVisitingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardVisitingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVisitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
