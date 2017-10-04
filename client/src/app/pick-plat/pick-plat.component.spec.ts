import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickPlatComponent } from './pick-plat.component';

describe('PickPlatComponent', () => {
  let component: PickPlatComponent;
  let fixture: ComponentFixture<PickPlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickPlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
