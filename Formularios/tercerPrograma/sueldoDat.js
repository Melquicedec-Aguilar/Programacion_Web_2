//formulario
function Salario() {

    let valorN = document.getElementById('Hora').value

    let valorH = document.getElementById('horasTabajadas').value

    let pagoNormal = 0;
    let pagoDOble = 0;
    let pagoTriple = 0;
    let pagoTotal = 0;
    let restaHoras = 0

    //muestra en pantalla
    document.write("<h2>Sueldo base:</h2>"+ valorN)
    document.write("<h2>Horas Trabajadas:</h2>")

    if ((valorH > 1) && (valorH <= 40)) {
        pagoNormal = valorH * valorN
        document.write(valorH + " - (" + valorH + " horas pago normal)" + '</br>')
        document.write("Su pago a realizar será de: $" + pagoNormal)

    } else if ((valorH > 41) && (valorH <= 47)) {
        pagoNormal = 40 * valorN
        restaHoras = valorH - 40
        pagoDOble = restaHoras * (valorN * 2)
        pagoTotal = pagoNormal + pagoDOble
        document.write(valorH + " - (40 horas pago normal y " + restaHoras + " horas pago doble)" + '</br>')
        document.write("Su pago a realizar será de: $" + pagoTotal)

    } else if (valorH >= 48) {
        pagoNormal = 40 * valorN
        pagoDOble = 7 * (valorN * 2)
        restaHoras = valorH - 47
        pagoTriple = restaHoras * (valorN * 3)
        pagoTotal = pagoNormal + pagoDOble + pagoTriple
        document.write(valorH + " - (40 horas pago normal, 7 horas pago doble y " + restaHoras + " horas pago triple)" + '</br>')
        document.write("Su pago a realizar será de: $" + pagoTotal)
    }
}