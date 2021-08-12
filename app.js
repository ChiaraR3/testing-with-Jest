// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
console.log(fromEuroToDollar(3.5))

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a 
    let valueInYen = valueInDollar * 127.9;
    // retornamos el valor
    return valueInYen;
}
console.log(fromDollarToYen(4.2))

const fromYentoPound = function(valueInYen){
    // convertimos el valor a 
    let valueInPound= valueInYen * 0.8;
    // retornamos el valor
    return valueInPound;
}
console.log(fromYentoPound(537.18))
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYentoPound }