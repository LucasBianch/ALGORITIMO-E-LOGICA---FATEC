function somar() {
    var n1 = Number(document.getElementById("n1").value)
    var msg = document.getElementById("msg")
       msg.innerHTML = `<b>A temperatura em Celcius é: ${n1-273.15} </b>`
}