import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPeliculasComponent } from './gestion-peliculas.component';

describe('GestionPeliculasComponent', () => {
  let component: GestionPeliculasComponent;
  let fixture: ComponentFixture<GestionPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionPeliculasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
