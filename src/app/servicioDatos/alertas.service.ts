import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AlertaServicios {

    constructor(
    //public autentica: FormGroup,
    private route: ActivatedRoute,
    private router: Router,
   ) { }

    public cargando(text: string): void{
        Swal.fire({
            showConfirmButton: false,
            showCloseButton: false,
            showCancelButton: false,
            allowOutsideClick: false,
            loaderHtml: `<img src="assets/img/cargando.gif" style="width: 70px; heigth:50px" />`,
            footer: `<p>${text}</p>`,
            width: 300,
            heightAuto: false,
        });
        Swal.showLoading();
    };

    public cerrar(): void{
        Swal.close();
    }

    public errorAutenticacion(texto: string): void{
            Swal.fire({
            icon: "error",
            title: "Error de autenticación",
            text: texto,
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
    }

    public satisfactorio(texto: string): void{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: texto,
          showConfirmButton: false,
          timer: 2000
      });
      
    }
    
    public ConfirmarRegistro(): void{
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
        swalWithBootstrapButtons.fire({
            title: "A donde prefiere le enviemos su código de verificación?",
            text: "",
            icon: "info",
            showCancelButton: true,
            confirmButtonText: "Número de teléfono",
            cancelButtonText: "Correo electrónico",
            reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
              title: "Enviado",
              text: "Se ha enviado un sms a su número de teléfono.",
              icon: "success"
          });
            this.router.navigate(['confirmar']);
        } else if (
    /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
            ) {
            swalWithBootstrapButtons.fire({
              title: "Enviado",
              text: "Se ha enviado un correo a su dirección.",
              icon: "success"
          });
            this.router.navigate(['confirmar']);
        }
    });
    }

}