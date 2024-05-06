let valor = document.querySelectorAll('.buttons')
let resultado = document.querySelector('.resposta')
let sinais = document.querySelectorAll('.sinal')

valor.forEach(btn => {
    btn.addEventListener('click', clicar)
})

function clicar(e) {
    console.log(e.target)
}
