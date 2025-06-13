import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlUi } from './control-ui';

describe('ControlUi', () => {
  let component: ControlUi;
  let fixture: ComponentFixture<ControlUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
