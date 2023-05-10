function compare() {
    var Valor1 = Number(document.getElementById("numero1").value)
    var Valor2 = Number(document.getElementById("numero2").value)
    var msg = document.getElementById("msg")
    if
        (Valor1 > Valor2 )
        msg.innerHTML = `<b>O Maior valor é: ${Valor1}</b>`
    else{
        (Valor1 < Valor2 )
        msg.innerHTML = `<b>O Maior valor é: ${Valor2}</b>`
    }
        
       
}