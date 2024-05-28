export class Correos{
	idcorreo? : any;
	direccion? : string;
	password? : string;
}

export class Personas{
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

export class Municipio{
	idmunicipio? : any;
	descripcion? : string;
}

export class Provincia{
	idprovincia? : any;
	descripcion? : string;
}

export class Pais{
	idpais? : any;
	descripcion? : string;
}