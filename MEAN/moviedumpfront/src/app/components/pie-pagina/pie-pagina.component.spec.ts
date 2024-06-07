import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiePaginaComponent } from './pie-pagina.component';

describe('PiePaginaComponent', () => {
  let component: PiePaginaComponent;
  let fixture: ComponentFixture<PiePaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiePaginaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiePaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
