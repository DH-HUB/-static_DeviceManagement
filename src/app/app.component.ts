import { Component } from '@angular/core';
import { TokenIdentificationService } from './token-identification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public email: string = "";
  constructor(private tokenIdentification: TokenIdentificationService) { }

  ngOnInit() {
    this.tokenIdentification.utilisateur.subscribe(
      utilisateur => {
        if (utilisateur != null) {
          this.email = utilisateur.sub
        } else {
          this.email = "";
        }
      }
    );
   // let donnees = this.tokenIdentification.getBody();

  //  if (donnees != null) {
  //    this.email = donnees.sub;
  //  }
    this.tokenIdentification.raffraichir();
  }
}
