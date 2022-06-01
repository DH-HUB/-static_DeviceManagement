import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { PageEditionUtilisateurComponent } from './page-edition-utilisateur/page-edition-utilisateur.component';
import { PageGestionMaterielComponent } from './page-gestion-materiel/page-gestion-materiel.component';
import { PageGestionUtilisateurComponent } from './page-gestion-utilisateur/page-gestion-utilisateur.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { UserGuard } from './user.guard';


const routes: Routes = [
  { path: '', component: PageAccueilComponent },
  { path: 'connexion', component: PageConnexionComponent },
  { path: 'inscription', component: PageInscriptionComponent },
  { path: 'gestion-utilisateur', component: PageGestionUtilisateurComponent, canActivate: [UserGuard]},
  { path: 'gestion-materiel', component: PageGestionMaterielComponent, canActivate: [AdminGuard]},
  { path: 'edition-utilisateur/:id', component: PageEditionUtilisateurComponent , canActivate: [UserGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
