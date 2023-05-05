import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreCardComponent } from './livre-card.component';

describe('LivreCardComponent', () => {
  let component: LivreCardComponent;
  let fixture: ComponentFixture<LivreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
