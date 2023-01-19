const texto = "me encata mi novia y se la re doy"

let nuevotexto = texto.split(" ");

nuevotexto.forEach(function(elemento,index,arreglo){
    let nuevaletra = elemento[0].toUpperCase();
    nuevotexto[index] = arreglo[index].replace(`${arreglo[index][0]}`,`${nuevaletra}`)
})

nuevotexto = nuevotexto.toString()
nuevotexto = nuevotexto.replaceAll(","," ")

console.log(nuevotexto)



