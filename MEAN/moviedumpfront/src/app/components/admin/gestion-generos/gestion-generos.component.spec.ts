import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionGenerosComponent } from './gestion-generos.component';

describe('GestionGenerosComponent', () => {
  let component: GestionGenerosComponent;
  let fixture: ComponentFixture<GestionGenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionGenerosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
