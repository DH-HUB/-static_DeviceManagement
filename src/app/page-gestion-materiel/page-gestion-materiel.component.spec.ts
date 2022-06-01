import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGestionMaterielComponent } from './page-gestion-materiel.component';

describe('PageGestionMaterielComponent', () => {
  let component: PageGestionMaterielComponent;
  let fixture: ComponentFixture<PageGestionMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGestionMaterielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGestionMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
