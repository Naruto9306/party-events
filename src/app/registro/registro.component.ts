import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AlertaServicios } from '../servicioDatos/alertas.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  private alertas = inject(AlertaServicios);
  loginForm = new FormGroup({
      nombre: new FormControl('', {
        validators: [Validators.required]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
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
   // this.router.navigate(['/confirmar']);
    this.preguntarEnvio();
  }

  public preguntarEnvio(): void{
    this.alertas.ConfirmarRegistro();
  }
}
