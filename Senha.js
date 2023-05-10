function senha() {
    var n1 = Number(document.getElementById("n1").value)
    var msg = document.getElementById("msg")
    if
        ( n1 == 12345)
        msg.innerHTML =  "Olá, Acesso Permitido." 
    else{
        msg.innerHTML = "Acesso Negado, tente novamente."
    }
    
}