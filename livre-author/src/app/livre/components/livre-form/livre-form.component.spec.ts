import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreFormComponent } from './livre-form.component';

describe('LivreFormComponent', () => {
  let component: LivreFormComponent;
  let fixture: ComponentFixture<LivreFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
