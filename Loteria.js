function somar(){
    var n1 = Number(document.getElementById("n1").value)
    var n2 = Number(document.getElementById("n2").value)
    var n3 = Number(document.getElementById("n3").value)
    var Premio = Number(document.getElementById("Premio").value)
    var total = n1 + n2 + n3

    var perc1 = (n1*100)/total
    var perc2 = (n2*100)/total
    var perc3 = (n3*100)/total

    var rec1 = (Premio*perc1)/100
    var rec2 = (Premio*perc2)/100
    var rec3 = (Premio*perc3)/100

    window.alert(`Do prêmio de: ${Premio.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} O primeiro apostador que investiu: 
    ${n1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} , receberá: ${rec1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}  
    O segundo apostador que investiu: ${n2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}, receberá: ${rec2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} 
    O terceiro apostador que investiu: ${n3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}, receberá: ${rec3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} `)

}