function somar() {
    var n1 = Number(document.getElementById("n1").value)
    var n2 = Number(document.getElementById("n2").value)
    var n3 = Number(document.getElementById("n3").value)
    var soma = n1 + n2 + n3
    var nome = document.getElementById("nome").value
    var msg = document.getElementById("msg")
    //msg.innerHTML = "O valor da soma é:" + soma
    msg.innerHTML = `<b>Oi ${nome}, o valor da <i>soma</i> é: <u>${soma}</u></b> </br>Seu nome em maiúsculo é ${nome.toUpperCase()}</u> </br> Seu nome em minúsculo é: ${nome.toLowerCase()}`
    //window.alert(soma)


}