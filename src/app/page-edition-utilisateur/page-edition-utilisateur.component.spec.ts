import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditionUtilisateurComponent } from './page-edition-utilisateur.component';

describe('PageEditionUtilisateurComponent', () => {
  let component: PageEditionUtilisateurComponent;
  let fixture: ComponentFixture<PageEditionUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditionUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditionUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
