import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageGestionUtilisateurComponent } from './page-gestion-utilisateur/page-gestion-utilisateur.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './token.interceptor';
import { PageGestionMaterielComponent } from './page-gestion-materiel/page-gestion-materiel.component';
import { PageEditionUtilisateurComponent } from './page-edition-utilisateur/page-edition-utilisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAccueilComponent,
    PageConnexionComponent,
    PageInscriptionComponent,
    PageGestionUtilisateurComponent,
    PageGestionMaterielComponent,
    PageEditionUtilisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{provide : HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
