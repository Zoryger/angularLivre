import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreDetailsComponent } from './livre-details.component';

describe('LivreDetailsComponent', () => {
  let component: LivreDetailsComponent;
  let fixture: ComponentFixture<LivreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
