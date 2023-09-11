//Declaração de variáveis

let multiplicacao = document.querySelector('.multiplicacao')
let respostaUsuario = document.querySelector('.resposta')
respostaUsuario.addEventListener('keypress', verificacaoResposta)
let feedbackJogada = document.querySelector('.feedbackJogada')
let progresso = document.querySelector('.progresso')
let num1
let num2
let jogada 
let respostaCorreta
let quantidadeJogadas = 0
let pontuacao = 0
multiplicacao.innerHTML = jogada 


// console.log('--------------------------------------')
// console.log(`Jogada Nº ${quantidadeJogadas} iniciada`)
// console.log(`${num1} X ${num2} = ${respostaCorreta}`)
// console.log(`Aguardando a resposta do usuário.`)

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
            
        }
        
        console.log(`Pontuação atual: ${pontuacao}`)
        
        novaJogada()
    }
}

//Rodadas 0 a 9

function novaJogada(){

    progresso.style = `width: ${(quantidadeJogadas) * 10}%;`
    if (quantidadeJogadas > 9) {
        
        //Aqui precisa fazer o frontend do "Game Over"
        //Mostrar a pontuação
        //surgir com o botão de jogar novamente
        //parar o eventListener do input
        fim_jogo(pontuacao)
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

function fim_jogo(pontuacao) {
    const $h2 = document.querySelector('h2')
    const $h3 = document.querySelector('.title2')
    const $btNovaJogada = document.querySelector('.play_again')
    const $sair = document.querySelector('.exit')
    const $quadrado = document.querySelector('.quadrado')
    
    $h2.innerText = `Fim da Partida`
    $h3.innerText = `Pontuação: ${pontuacao}`
    $quadrado.style = 'display: none;'
    $btNovaJogada.style = 'display: block;'
    $btNovaJogada.onclick = function() {
        window.location.href = 'carregamento.html'
    }
    $sair.style = 'display: block;'

}


