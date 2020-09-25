import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenShootTypesComponent } from './screen-shoot-types.component';

describe('ScreenShootTypesComponent', () => {
  let component: ScreenShootTypesComponent;
  let fixture: ComponentFixture<ScreenShootTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenShootTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenShootTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
