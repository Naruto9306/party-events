import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit{
   constructor(
    //public autentica: FormGroup,
    private route: ActivatedRoute,
    private router: Router,
   ) { }
  
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
