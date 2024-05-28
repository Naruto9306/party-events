import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent {

  cssUrl: string;
  cssUrl2: string;
  cssUrl3: string;
   constructor(public sanitizer: DomSanitizer) {
     this.cssUrl = '/assets/Estilos/vendor/fontawesome-free/css/all.min.css';
     this.cssUrl2 = '/assets/Estilos/css/sb-admin-2.css';
     this.cssUrl3 = 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i';
   }
}
