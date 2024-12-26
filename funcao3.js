/**
 * Valor do produto * Quantidade
 * margem de lucro
 */

function calcular_lucro (valor_produto = 10, qtd = 1, margem = 0.70 ){
    var calculo = (valor_produto * qtd) * margem
    console.log(" Valores recebidos " + `Valor do produto: ${valor_produto}, qtd: ${qtd}, margem: ${margem}`) 
    console.log( " total de lucro ", calculo)
}

calcular_lucro(100, 1, 2)