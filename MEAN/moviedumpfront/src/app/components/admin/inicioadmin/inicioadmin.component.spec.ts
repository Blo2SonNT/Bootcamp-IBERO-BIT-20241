import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioadminComponent } from './inicioadmin.component';

describe('InicioadminComponent', () => {
  let component: InicioadminComponent;
  let fixture: ComponentFixture<InicioadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
