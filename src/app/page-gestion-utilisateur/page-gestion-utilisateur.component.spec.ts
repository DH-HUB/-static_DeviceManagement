 import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGestionUtilisateurComponent } from './page-gestion-utilisateur.component';

describe('PageGestionUtilisateurComponent', () => {
  let component: PageGestionUtilisateurComponent;
  let fixture: ComponentFixture<PageGestionUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGestionUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGestionUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
