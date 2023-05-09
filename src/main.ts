class Persona {

    protected nombre: string;
    protected identificacion: string;
    protected edad: number;
    protected direccion: string;

    constructor(nombre: string, identificacion: string, edad: number, direccion: string) {
        this.nombre = nombre;
        this.identificacion = identificacion;
        this.edad = edad;
        this. direccion = direccion;
    }

    saludar(){
        console.log("hola, mi nombre es " + this.nombre + " mi identificacion es: " + this.identificacion + " tengo  " + this.edad + " años de edad")
    }
}

class Estudiante extends Persona {
    numeroMatricula: number;
    nivel: string;

    constructor(nombre: string, identificacion: string, edad: number, direccion: string, matricula: number, nivel: string){
        super(nombre, identificacion, edad, direccion);
        this.numeroMatricula = matricula;
        this.nivel = nivel;
    }
}

class Docente extends Persona{
    contrato: string;
    titulo: string;

    constructor(nombre: string, identificacion: string, edad: number, direccion: string, contrato: string, titulo: string){
        super(nombre, identificacion, edad, direccion);
        this.contrato = contrato;
        this.titulo = titulo;
    }

}


//let estudiante = new Estudiante(45, "tercero");
//console.log(estudiante.numeroMatricula, estudiante.nivel)
//document.write(estudiante.numeroMatricula, estudiante.nivel)

//let persona = new Persona("Danny", "1728969872", 22, "Guajalo"  )
//console.log(persona.saludar())

let estudiante = new Estudiante("Danny", "1728969872", 22, "Guajalo", 65, "primero")
console.log(estudiante.saludar());

let docente = new Docente("Jose", "1728969872", 45, "Guajalo", "indefinido", "master")
console.log(docente.saludar());