export interface Correos{
	idcorreo? : any;
	direccion? : string;
	password? : string;
}

export interface Personas{
	idpersona? : any;
	ci? : string;
	nombre? : string;
	apellido1? : string;
	apellido2? : string;
	telefono? : string;
	idpais? : any;
	idmunicipio? : any;
    idprovincia? : any;
    idcorreos? : any;
}

export interface Municipio{
	idmunicipio? : any;
	descripcion? : string;
}

export interface Provincia{
	idprovincia? : any;
	descripcion? : string;
}

export interface Pais{
	idpais? : any;
	descripcion? : string;
}