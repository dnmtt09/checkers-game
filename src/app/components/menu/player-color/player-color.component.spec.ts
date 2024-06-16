import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerColorComponent } from './player-color.component';

describe('PlayerColorComponent', () => {
  let component: PlayerColorComponent;
  let fixture: ComponentFixture<PlayerColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
