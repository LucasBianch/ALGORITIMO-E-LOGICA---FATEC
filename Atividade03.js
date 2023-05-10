function imprime() {
    var n1 = Number(document.getElementById("n1").value)
    var msg = document.getElementById("msg")
       msg.innerHTML = `<b>O Antecessor do número é:  ${+ n1 -1}  </br> O Sucessor desse número é: ${+ n1+1} </b>`

}