class Estudiante {
    nombre = "Federico";
    asignaturas = ["JavaScript", "HTML", "CSS"];

    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}

const nuevoEstudiante = new Estudiante();

console.log(nuevoEstudiante.obtenDatos());