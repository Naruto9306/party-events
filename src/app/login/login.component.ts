import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
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
   this.router.navigate(['/inicio']);
  }
}
