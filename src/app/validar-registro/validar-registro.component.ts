import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AlertaServicios } from '../servicioDatos/alertas.service';

@Component({
  selector: 'app-validar-registro',
  templateUrl: './validar-registro.component.html',
  styleUrls: ['./validar-registro.component.css']
})
export class ValidarRegistroComponent {
  private alertas = inject(AlertaServicios);
   loginForm = new FormGroup({
      codigo: new FormControl('', { validators: [Validators.required] })
    });

   constructor(
    //public autentica: FormGroup,
    private route: ActivatedRoute,
    private router: Router,
   ) { }

   onSubmit(): void {
    if (this.loginForm.valid){
       this.perfecto("Se ha completado su registro. Teclee sus datos para acceder al sitio.")
       this.router.navigate(['login']);
    }else{
       this.errorAutenticando("Debe insertar su código de verificación.");
    }
       
   }

   public errorAutenticando(texto: string): void{
    this.alertas.errorAutenticacion(texto);
  }

  public perfecto(texto: string): void{
    this.alertas.satisfactorio(texto);
  }
}
