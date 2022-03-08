import { Component } from '@angular/core';


@Component({
  selector: 'app-contador',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contador';

  numero: number = 0;

  aumentar(){
    this.numero +1;
    this.numero ++
  }

   tirar(){
     this.numero -1;
     this.numero --
    }
}
