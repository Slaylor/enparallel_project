import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitUiComponent } from './kit-ui.component';

describe('KitUiComponent', () => {
  let component: KitUiComponent;
  let fixture: ComponentFixture<KitUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
