import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPlanetsComponent } from './index-planets.component';

describe('IndexPlanetsComponent', () => {
  let component: IndexPlanetsComponent;
  let fixture: ComponentFixture<IndexPlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPlanetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
