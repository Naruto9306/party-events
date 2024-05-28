import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { dataService } from 'src/app/servicioDatos/globos.service';
import { Correos } from 'src/app/models/modelos.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  correos?: Correos[];
  currentTutorial: Correos = {};
  currentIndex = -1;
  title = '';
  email: string = '';
  password: string = '';
  id?: any;
  correosUser: any[] = [];
  x : number = 0;

   loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });

   constructor(
    //public autentica: FormGroup,
    private route: ActivatedRoute,
    private router: Router,
    private ServiceCorreo: dataService
   ) { }
  
  ngOnInit(): void {
    this.TodosCorreos();
   
  }

  TodosCorreos(): void{
    this.ServiceCorreo.ObtenerCorreos()
      .subscribe({
        next: (data) => {
          this.correos = data;
          this.correosUser.push(data);
          //console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.TodosCorreos();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  buscarCorreos(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;

    this.ServiceCorreo.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.correos = data;
          //console.log(data);
        },
        error: (e) => console.error(e)
      });
      //console.log(this.correos);
  }

  async onSubmit() {
    // validar que este correcto los datos del formulario
    if (this.loginForm.valid){
       // Buscar el id del correo si existe
      //  this.ServiceCorreo.ObtenerCorreos()
      //  .subscribe({
      //   next: (data) => {
      //     this.correos = data;
      //     this.correosUser.push(data);
      //      // console.log(this.correos[0].direccion);
      //     // if (this.correos[0].direccion == this.loginForm.value.email){
      //     //   this.id = this.correos[0].idcorreo;
      //     //   console.log(this.id);
      //     // }
      //   },
      //   error: (e) => console.error(e)
      // });

      console.log(this.correosUser[0]);
      // console.log(this.loginForm.value.email);
       for(let i of this.correosUser){
         console.log(i[this.x]);
         this.x++;
         // this.x++;
          // if (i[0].direccion == this.loginForm.value.email){
          //   this.id = i[0].idcorreo;
          // }
       }

      //  this.ServiceCorreo.ObtenerId(this.id)
      //  .subscribe({
      //   next: (data) => {
      //     this.currentTutorial = data;
      //     console.log(data);
      //   },
      //   error: (e) => console.error(e)
      // });

    }else{
      console.log("Correo electronico incorrecto o password en blanco");
    }
    
    //this.router.navigate(['inicio']);
  }
}
