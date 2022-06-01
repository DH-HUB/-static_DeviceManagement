import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TokenIdentificationService } from '../token-identification.service';

@Component({
  selector: 'app-page-connexion',
  templateUrl: './page-connexion.component.html',
  styleUrls: ['./page-connexion.component.scss']
})
export class PageConnexionComponent implements OnInit {

 // public email: string = "";
//  public mp: string = "";
  public formControl: FormGroup = this.formBuilder.group({
    "email": ["", [Validators.required, Validators.email]],
    "motDePasse":["", [Validators.required]],});
  constructor(private client: HttpClient, private router: Router, private formBuilder: FormBuilder, private tokenIdentification: TokenIdentificationService) { }

  ngOnInit(): void {

  }

  onConnexion(): void {
if(this.formControl.valid){
  const utilisateur = this.formControl.value;



    this.client
      .post("http://"+ environment.adresseServeur + "/connexion", utilisateur)
      .subscribe((resultat: any) => {
        if (resultat.erreur) {
          alert(resultat.erreur);
        } else {
          localStorage.setItem('token', resultat.token)
          this.tokenIdentification.raffraichir();
          this.router.navigateByUrl("");
        }
      })
  }

}}
