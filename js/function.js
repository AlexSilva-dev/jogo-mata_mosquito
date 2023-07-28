var vida = 3;


function tamanhoTela() {
    let screenHeight = window.innerHeight
    let screenWidth = window.innerWidth
}

function gerarMosquito(dificuldade) {

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()


        if (vida > 0) {
            document.getElementById("v" + vida).src = "image/coracao_vazio.png"
            vida--
        } else {
            window.location.href = 'vc-perdeu.html?dificuldade='+dificuldade
        }

    }
    var screenHeight = window.innerHeight
    var screenWidth = window.innerWidth


    let areaMin = 20
    let areaMax = 100
    let areaMosquito = (Math.random() * (areaMax - areaMin + 1)) + areaMin
    let mosquito = document.createElement("img")
    let randomW = Math.random() * (screenWidth - areaMosquito)
    let randomH = Math.random() * (screenHeight - areaMosquito - 10)
    mosquito.style.left = randomW + 'px'
    mosquito.style.top = randomH + 'px'
    mosquito.width = areaMosquito
    mosquito.style.position = 'absolute'
    mosquito.className = mudarLado()

    mosquito.src = 'image/mosca.png'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    };

    document.body.appendChild(mosquito)
}

function mudarLado() {
    let classe = "reverteLado"

    let random = Math.floor(Math.random() * 2)
    if (random == 1) {
        return classe
    }
}

function cronometro(tempo, dificuldade) {
    setInterval(
        function () {
            let span = document.getElementById("tempo")
            span.innerText = tempo
            console.log(span)
            tempo--
            if (tempo == 0) {
                window.location.href = 'vc-ganhou.html?dificuldade='+dificuldade
                return
            }
        }, 1000
    )
}


function run() {

    let queryString = window.location.search
    let param = new URLSearchParams(queryString)
    let dificuldade = param.get('dificuldade')
    console.log(dificuldade)

    let tempo;
    let intervalo;

    switch (dificuldade) {

        case '1':
            tempo = 20
            intervalo = 2000
            break;
        case '2':
            tempo = 30
            intervalo = 1500
            break;
        case '3':
            tempo = 30
            intervalo = 1100
            break;

    }
    cronometro(tempo, dificuldade)

    setInterval(function () {
        gerarMosquito(dificuldade);

    }, intervalo)
}