import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-edition-utilisateur',
  templateUrl: './page-edition-utilisateur.component.html',
  styleUrls: ['./page-edition-utilisateur.component.scss']
})
export class PageEditionUtilisateurComponent implements OnInit {

  public formControl: FormGroup = this.formBuilder.group(
    {
      "nom": ["", [Validators.required]],
      "prenom": ["", [Validators.required]]
    }
  )
  private idUtilisateur: number | undefined;
  constructor(
    private route: ActivatedRoute,
    private client: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (parametres: any) => {
        this.idUtilisateur = parametres.id
        this.client
          .get("http://"+ environment.adresseServeur + "/utilisateur/" + this.idUtilisateur)
          .subscribe((utilisateur: any) => {

            this.formControl = this.formBuilder.group(
              {
                "nom": [utilisateur.nom, [Validators.required]],
                "prenom": [utilisateur.prenom, [Validators.required]]
              }
            )

          })
      }
    )
  }

  onModification() {

    if (this.formControl.valid) {

      const utilisateur = this.formControl.value

      utilisateur.id = this.idUtilisateur;

      this.client
        .post("http://"+ environment.adresseServeur +"/utilisateur", utilisateur)
        .subscribe(utilisateur => {
          if (utilisateur) {
            this.router.navigateByUrl("gestion-utilisateur")
          } else {
            alert("Erreur")
          }
        })

    }
  }
}
