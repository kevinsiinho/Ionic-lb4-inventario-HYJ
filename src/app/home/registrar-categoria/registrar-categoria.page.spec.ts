import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarCategoriaPage } from './registrar-categoria.page';

describe('RegistrarCategoriaPage', () => {
  let component: RegistrarCategoriaPage;
  let fixture: ComponentFixture<RegistrarCategoriaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrarCategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
