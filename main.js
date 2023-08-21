let questoes = [
    questao = {
        tituloQuestao: "De quem é a famosa frase “Penso, logo existo?",
        opcoes: ["Platão"," Galileu Galilei","Descartes","Sócrates"],
        respostaCorreta: 2,
        imagemQuestao:"img 1.jpg",
        dificuldade: "easy"
    },
    questao = {
        tituloQuestao: "De onde é a invenção do chuveiro elétrico?",
        opcoes: ["França","Brasil","Inglaterra","Itália"],
        respostaCorreta: 1,
        imagemQuestao:"img 2.jpg",
        dificuldade: "easy"
    },
    questao = {
        tituloQuestao: "Qual é o autor de 'Romeu e Julieta'?",
        opcoes: ["William Shakespeare","William Faulkner","Jane Austen"," Charles Dickens"],
        respostaCorreta: 0,
        imagemQuestao:"img 3.jpg",
        dificuldade: "easy"
    },
    questao = {
        tituloQuestao: "Quais é o menor e o maior país do mundo?",
        opcoes: ["Vaticano e Rússia","São Marino e Índia","Malta e Estados Unidos","Mônaco e Canadá"],
        respostaCorreta: 0,
        imagemQuestao:"img 4.jpg",
        dificuldade: "easy"
    },
    questao = {
        tituloQuestao: "Qual o nome do presidente do Brasil que ficou conhecido como Jango?",
        opcoes: ["Jacinto Anjos"," Tancredo Neves"," Getúlio Vargas","João Goulart"],
        respostaCorreta: 3,
        imagemQuestao:"img 5.jpg",
        dificuldade: "medium"
    },
   
]
const btn0 = document.querySelector("#btn-0"),
    btn1 = document.querySelector("#btn-1"),
    btn2 = document.querySelector("#btn-2"),
    btn3 = document.querySelector("#btn-3"),
    btnIniciar = document.querySelector("#iniciar")
    comecoDiv = document.querySelector('#main'),
    questoesDiv = document.querySelector('#questoes'),
    fimDiv = document.querySelector('#fim'),
    indicador = document.querySelector('#atualQuestao'),
    Titulo = document.querySelector('#tituloDaQuestao'),
    imagem = document.querySelector('#img'),
    reiniciar = document.querySelector('#voltar'),
    terminoTitulo = document.querySelector('#terminoTitulo'),
    pontosFinais = document.querySelector('#score'),
    feedback = document.querySelector("#feedback")
    

reiniciar.addEventListener('click', () => {
    comecoDiv.classList.remove('hide')
    questoesDiv.classList.add('hide')
    fimDiv.classList.add('hide')
    score = 0
    questaoAtual = 0
})
btnIniciar.addEventListener('click', () => {
    vidas = document.querySelector('#vidas').value
    if (vidas >= 1 && vidas <= 10){
        comecoDiv.classList.add('hide')
        questoesDiv.classList.remove('hide')
        fimDiv.classList.add('hide')
        carregar() 
    }
    else{
        btnIniciar.style.backgroundColor = 'red'
        btnIniciar.style.color = "white"
        btnIniciar.textContent = "Insira um valor de 0 a 10"
    }

})


let questaoAtual = 0,
  score = 0
function carregar(){
    if(questaoAtual < questoes.length){
        btn0.classList.remove("correct",'wrong')
        btn1.classList.remove('correct','wrong')
        btn2.classList.remove('correct','wrong')
        btn3.classList.remove('correct','wrong')
        indicador.textContent = questaoAtual+1
        Titulo.textContent = questoes[questaoAtual].tituloQuestao
        btn0.textContent = questoes[questaoAtual].opcoes[0]
        btn1.textContent = questoes[questaoAtual].opcoes[1]
        btn2.textContent = questoes[questaoAtual].opcoes[2]
        btn3.textContent = questoes[questaoAtual].opcoes[3]
        imagem.src = questoes[questaoAtual].imagemQuestao
    }
    else{
        alert(`Você terminou o Quiz!!`)
        questoesDiv.classList.add('hide')
        fimDiv.classList.remove('hide')
        carregarTermino()
    }

}
function carregarTermino(){
    questoesDiv.classList.add('hide')
    fimDiv.classList.remove('hide')
    if (vidas > 0){
        terminoTitulo.textContent = "Parabéns, você completou o quizz!"
        pontosFinais.textContent = `Você marcou ${score} pontos`
    }
    else {
        terminoTitulo.textContent = "Você perdeu"
        pontosFinais.textContent = `Você marcou ${score} pontos`
    }
}





btn0.addEventListener('click', () => {
    resposta = 0
    respostaCerta = questoes[questaoAtual].respostaCorreta
    diff = questoes[questaoAtual].dificuldade
    console.log(respostaCerta)
    if (resposta == respostaCerta){
        if (diff == "hard"){
            score += 30
            ++questaoAtual
            carregar()
        }else if(diff == "medium"){
            score += 20
            ++questaoAtual
            carregar()
        }else{
            score += 10
            ++questaoAtual
            carregar()
        }
    }
    else{
        btn0.classList.add("wrong")
        --vidas
        if(vidas > 0){
              alert(`Resposta errada, mas você ainda tem ${vidas} vida(s)!`)
        }
        else{
            alert(`Suas vidas acabaram`)
            carregarTermino()
        }

    }
})
btn1.addEventListener('click', () => {
    resposta = 1
    respostaCerta = questoes[questaoAtual].respostaCorreta
    console.log(respostaCerta)
    diff = questoes[questaoAtual].dificuldade
    if (resposta == respostaCerta){
        if (diff == "hard"){
            score += 30
            ++questaoAtual
            carregar()
        }else if(diff == "medium"){
            score += 20
            ++questaoAtual
            carregar()
        }else{
            score += 10
            ++questaoAtual
            carregar()
        }
    }
    else{
        btn1.classList.add("wrong")
        --vidas
        if(vidas > 0){
              alert(`Resposta errada, mas você ainda tem ${vidas} vida(s)!`)
        }
        else{
            alert(`Suas vidas acabaram`)
            carregarTermino()
        }

    }
    
})
btn2.addEventListener('click', () => {
    resposta = 2
    respostaCerta = questoes[questaoAtual].respostaCorreta
    console.log(respostaCerta)
    diff = questoes[questaoAtual].dificuldade
    if (resposta == respostaCerta){
        if (diff == "hard"){
            score += 30
            ++questaoAtual
            carregar()
        }else if(diff == "medium"){
            score += 20
            ++questaoAtual
            carregar()
        }else{
            score += 10
            ++questaoAtual
            carregar()
        }
    }
    else{
        btn2.classList.add("wrong")
        --vidas
        if(vidas > 0){
              alert(`Resposta errada, mas você ainda tem ${vidas} vida(s)!`)
        }
        else{
            alert(`Suas vidas acabaram`)
            carregarTermino()
        }

    }
})
btn3.addEventListener('click', () => {
    resposta = 3
    respostaCerta = questoes[questaoAtual].respostaCorreta
    console.log(respostaCerta)
    diff = questoes[questaoAtual].dificuldade
    if (resposta == respostaCerta){
        if (diff == "hard"){
            score += 30
            ++questaoAtual
            carregar()
        }else if(diff == "medium"){
            score += 20
            ++questaoAtual
            carregar()
        }else{
            score += 10
            ++questaoAtual
            carregar()
        }
    }
    else{
        btn3.classList.add("wrong")
        --vidas
        if(vidas > 0){
              alert(`Resposta errada, mas você ainda tem ${vidas} vida(s)!`)
        }
        else{
            alert(`Suas vidas acabaram`)
            carregarTermino()
        }

    }
})