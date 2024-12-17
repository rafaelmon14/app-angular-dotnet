import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceInventarioComponent } from './indice-inventario.component';

describe('IndiceInventarioComponent', () => {
  let component: IndiceInventarioComponent;
  let fixture: ComponentFixture<IndiceInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiceInventarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
