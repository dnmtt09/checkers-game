import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWaitActionComponent } from './modal-wait-action.component';

describe('ModalWaitActionComponent', () => {
  let component: ModalWaitActionComponent;
  let fixture: ComponentFixture<ModalWaitActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalWaitActionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalWaitActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
