import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMatchOutcomeComponent } from './modal-match-outcome.component';

describe('ModalMatchOutcomeComponent', () => {
  let component: ModalMatchOutcomeComponent;
  let fixture: ComponentFixture<ModalMatchOutcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalMatchOutcomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalMatchOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
