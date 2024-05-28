import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit{

  cssUrl: string;
  cssUrl2: string;
   constructor(
    //public autentica: FormGroup,
    private route: ActivatedRoute,
    private router: Router,
    public sanitizer: DomSanitizer
   ) {
     this.cssUrl = 'https://fonts.googleapis.com/css2?family=Nunito+Sans&family=Nunito:wght@600;700;800&display=swap';
     this.cssUrl2 = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css';
  }
  
  ngOnInit() {
    // this.autentica = new FormGroup({
    //   email: new FormControl('', {
    //     validators: [Validators.required, Validators.email]
    //   }),
    //   password: new FormControl('', { validators: [Validators.required] })
    // });
  }

  async onSubmit() {
   //const cap = this.loginForm.value.email, this.loginForm.value.password;
   this.router.navigate(['/reserva']);
  }
}
