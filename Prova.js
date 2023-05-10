function notafinal() {
    var P1 = Number(document.getElementById("p1").value)
    var P2 = Number(document.getElementById("p2").value)
    var T1 = Number(document.getElementById("t1").value)
    var T2 = Number(document.getElementById("t2").value)
    var NotaTotal = (P1 * 0.7 + T1 * 0.3 + P2 * 0.7 + T2 * 0.3) / 2

        if
            (NotaTotal >= 6) 
            msg.innerHTML = "<b>Aluno Aprovado.\nNota:</b> " + NotaTotal
        else{
            (NotaTotal < 6)
            msg.innerHTML = "<b>Aluno Reprovado.\nNota:</b> " + NotaTotal
        }
        
}