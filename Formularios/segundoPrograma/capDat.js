//formulario
function Promedio() {
    //input Unilinea
    //obtener valor por notación del punto .value
    let nombre = document.getElementById('nombre').value
    let primera = document.getElementById('1C').value
    let segunda = document.getElementById('2C').value
    let tercera = document.getElementById('3C').value
    let cuarta = document.getElementById('4C').value
    let quinta = document.getElementById('5C').value

    //muestra en pantalla
    document.write("<h2>Su nombre es:</h2>" + nombre)
    document.write("<h2>Su primera calificación es:</h2>" + primera)
    document.write("<h2>Su primera calificación es:</h2>" + segunda)
    document.write("<h2>Su primera calificación es:</h2>" + tercera)
    document.write("<h2>Su primera calificación es:</h2>" + cuarta)
    document.write("<h2>Su primera calificación es:</h2>" + quinta)

    let PC = parseFloat(primera)
    let SC = parseFloat(segunda)
    let TC = parseFloat(tercera)
    let CC = parseFloat(cuarta)
    let QC = parseFloat(quinta)
    let resultado = (PC + SC + TC + CC + QC) / 5
    let promedio = parseFloat(resultado)

    document.write("<h2>Usted tiene de promedio:</h2> " + promedio)

    if (promedio >= 6.0) {
        document.write("<h4>Alumno aprobado</h4>")
    } else {
        document.write("<h4>Alumno reprobado</h4>")
    }
}