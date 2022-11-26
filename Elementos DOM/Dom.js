//Métodos para encontrar elementos dentro del documento

// A) Muestra el número de artículos que existen en el documento
console.log(document.getElementsByTagName("h3").length)
// B) Identifica las lineas divisioras dentro del documento y número de líneas
console.log(document.getElementsByTagName("hr"))
console.log(document.getElementsByTagName("hr").length)
// C) Identifica los elementos de la lisa dentro del documento y número de elementos en total
console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByTagName("li").length)
// D) Identifica elementos de la "Lista de Elementos", número de elementos y codigo del enlace dentro de dicha lista
console.log(document.getElementById("elemen"))
console.log(document.querySelectorAll("#elemen li").length)
console.log(document.querySelectorAll("#elemen a"))	//duda código del enlace
// E) Identificar elementos de la lista "Menú", identificar enlaces y número de enlaces en dicha lista
console.log(document.getElementById("menu"))
document.querySelectorAll("#menu a").forEach((el)=>console.log(el)) //duda console.log(document.querySelectorAll("#menu a")) 
console.log(document.querySelectorAll("#menu a").length)
// F) Identificar imágenes dentro del Documento y número de imágenes en total
console.log(document.getElementsByTagName("img"))
console.log(document.getElementsByTagName("img").length)
// G) Identificar imágenes del bloque referente al "Artículo 2", identificar primera imágen 
//     y número total de imágenes del bloque
console.log(document.getElementsByClassName("imgAr2"))
console.log(document.getElementsByClassName("imgAr2")[0])
console.log(document.getElementsByClassName("imgAr2").length)
// H) Identificar imágenes del bloque referente al "Artículo 3", número de imágenes y código referente a la 
//      segunda y cuarta imágen del presente bloque
console.log(document.querySelectorAll("#imgAr3 img"))
console.log(document.querySelectorAll("#imgAr3 img").length)
console.log(document.querySelectorAll("#imgAr3 img")[1])	//duda código referente a la imagen
console.log(document.querySelectorAll("#imgAr3 img")[3])
// I) Identificar enlaces del Documento y número de enlaces totales
console.log(document.getElementsByTagName("a"))
console.log(document.getElementsByTagName("a").length)
// J) Identificar enlaces distribuidos dentro del párrafo referente al "Artículo 1" y número de enlaces
document.querySelectorAll("#text1 a").forEach((enl)=>console.log(enl)) //duda console.log(document.querySelectorAll("#text1 a")) 
console.log(document.querySelectorAll("#text1 a").length)
