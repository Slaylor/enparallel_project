import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexShowPlanetsComponent } from './index-show-planets.component';

describe('IndexShowPlanetsComponent', () => {
  let component: IndexShowPlanetsComponent;
  let fixture: ComponentFixture<IndexShowPlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexShowPlanetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexShowPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
