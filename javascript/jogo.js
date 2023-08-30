//Declaração de variáveis

let multiplicacao = document.querySelector('.multiplicacao')
let respostaUsuario = document.querySelector('.resposta')
respostaUsuario.addEventListener('keypress', verificacaoResposta)
let feedbackJogada = document.querySelector('.feedbackJogada')
let num1 = parseInt(Math.random()*10)
let num2 = parseInt(Math.random()*10)
let jogada = `${num1} x ${num2} = ` 
let respostaCorreta = num1*num2
let quantidadeJogadas = 0
let pontuacao = 0
multiplicacao.innerHTML = jogada 

/*
console.log('--------------------------------------')
console.log(`Jogada Nº ${quantidadeJogadas} iniciada`)
console.log(`${num1} X ${num2} = ${respostaCorreta}`)
console.log(`Aguardando a resposta do usuário.`)
*/
novaJogada()

function verificacaoResposta(evento) {
    //console.log(evento.key)
    if (evento.key == 'Enter') {
        if (parseInt(respostaUsuario.value) == respostaCorreta) {
            feedbackJogada.classList.add('quandoCorreto')
            setTimeout(function() {
                feedbackJogada.innerHTML = ''
            }, 1000)
            feedbackJogada.innerHTML = 'Resposta correta!!'
            console.log(`Resposta usuário ${respostaUsuario.value} está correta!!`)
            console.log(`Fim da jogada Nº ${quantidadeJogadas}`)
            console.log('**************************************')
            pontuacao++
        } else {
            feedbackJogada.classList.add('quandoIncorreto')
            feedbackJogada.innerHTML = 'Resposta incorreta!!'
            setTimeout(function() {
                feedbackJogada.innerHTML = ''
                feedbackJogada.classList.remove('quandoIncorreto')
            }, 1000)
            console.log(`Resposta usuário ${respostaUsuario.value} está incorreta!!`)
            console.log(`Fim da jogada Nº ${quantidadeJogadas}`)
            console.log('**************************************')
            pontuacao--
        }
        
        console.log(`Pontuação atual: ${pontuacao}`)
        
        novaJogada()
    }
}

//Rodadas 1 a 10
function novaJogada(){
    if (quantidadeJogadas > 9) {

        console.log('Game Over!')
        console.log(`Score: ${pontuacao}`)

    } else {

        quantidadeJogadas++
        console.log('--------------------------------------')
        console.log(`Jogada Nº ${quantidadeJogadas} inicada`)
        num1 = parseInt(Math.random()*10)
        num2 = parseInt(Math.random()*10)
        jogada = `${num1} x ${num2} = ` 
        respostaCorreta = num1*num2
        
        
        multiplicacao.innerHTML = jogada
        respostaUsuario.value = ''
        
        console.log(`${num1} X ${num2} = ${respostaCorreta}`)
        console.log(`Aguardando a resposta do usuário.`)
        
        verificacaoResposta()
    }
    
}


