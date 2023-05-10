function segundos() {
    const Soma1 = Number(document.getElementById("Soma").value)
   
    let Soma = Soma1

    const hora = parseInt(Soma / 3600) // Cálculo para transformar em horas.
    Soma = Soma % 3600  // pegar resto do cálculo de horas. 

    const minuto = parseInt(Soma / 60) // Cálculo para minutos.
    Soma = Soma % 60 // pegar o restante do cálculo acima.

    const msg = document.getElementById("msg")
    msg.innerHTML = `${Soma1} Segundos. <b>Convertendo é: ${hora}:${minuto}:${Soma}</b>`
}