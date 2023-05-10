function idade() {
    var n1 = Number(document.getElementById("n1").value)
    var n2 = Number(document.getElementById("n2").value)
    var n3 = Number(document.getElementById("n3").value)
    var idadetotal = (n1*365)+(n2*30)+(n3)
        window.alert (`Sua idade em dias é: ${idadetotal}`)
    }