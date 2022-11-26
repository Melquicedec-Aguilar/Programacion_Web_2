//formulario
function IMC() {
    //input Unilinea
    //obtener valor por notación del punto .value
    let valorN = document.getElementById('nombre').value
    let valorE = document.getElementById('edad').value
    let valorA = document.getElementById('altura').value
    let valorP = document.getElementById('peso').value

    //muestra en pantalla
    document.write("<h2>Su nombre es:</h2>" + valorN)
    document.write("<h2>Su edad es:</h2>" + valorE + " años")
    document.write("<h2>Su Altura es:</h2>" + valorA + " metros")
    document.write("<h2>Su Peso es:</h2>" + valorP + " kg")

    let p = parseFloat(valorP)
    let a = parseFloat(valorA)
    let resultado = p / (a) ** 2
    let imc = parseFloat(resultado)

    document.write("<h2>Usted tiene de masa corporal:</h2> " + imc)

    if (imc > 25) {
        document.write("<h4>Se encuentra en un Peso Alto, haga dieta y ejercicio</h4>")
    } else if (imc < 25 && imc > 22) {
        document.write("<h4>Se encuentra en el Peso correcto</h4>")
    } else {
        document.write("<h4>Se encuentra en un Peso bajo, coma más</h4>")
    }
}