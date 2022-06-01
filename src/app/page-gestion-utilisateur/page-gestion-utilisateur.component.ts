import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TokenIdentificationService } from '../token-identification.service';

@Component({
  selector: 'app-page-gestion-utilisateur',
  templateUrl: './page-gestion-utilisateur.component.html',
  styleUrls: ['./page-gestion-utilisateur.component.scss'],
})
export class PageGestionUtilisateurComponent implements OnInit {

  public listeUtilisateurs: any;
 public admin: boolean = false;
  public idUtilisateurConnecte: number = 0;

  constructor(
    private client: HttpClient,
    private tokenIdentification: TokenIdentificationService,
    private router: Router) { }

  ngOnInit(): void {

    this.raffraichirListeUtilisateur()

    this.tokenIdentification.utilisateur.subscribe(
      utilisateur => {
        this.admin = utilisateur != null && utilisateur.droits.includes("ROLE_ADMIN")
        this.idUtilisateurConnecte = utilisateur.id
      }
    )
  }
   // const donnee = this.tokenIdentification.getBody();
    //if(donnee !=null){
    //  this.admin = donnee.droits.includes("ROLE_ADMIN");
    //  }
    //console.log(this.admin)
 // }
  raffraichirListeUtilisateur() {

    this.client.get("http://"+ environment.adresseServeur + "/liste-utilisateur")
      .subscribe(reponse => this.listeUtilisateurs = reponse);

  }
  onSupprimeUtilisateur(idUtilisateurAsupprimer : number) {


    this.client
      .delete("http://"+ environment.adresseServeur  +"/utilisateur/"+ idUtilisateurAsupprimer)
      .subscribe(reponse => this.raffraichirListeUtilisateur())
  }
  onEditionUtilisateur(idUtilisateurAModifier: number) {
    this.router.navigate(["edition-utilisateur", idUtilisateurAModifier])
// ou // this.router.navigateByUrl("edition-utilisateur/" + idUtilisateurAModifier)
  }
}
