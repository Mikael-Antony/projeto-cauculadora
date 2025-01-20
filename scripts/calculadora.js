//tela e testos na tela
const tela = document.getElementById('tela')
const telaCima = document.getElementById('out1')
const telaBaixo = document.getElementById('out2')

//botoes numericos e um ponto
const b1 = document.getElementById('button-1')
const b2 = document.getElementById('button-2')
const b3 = document.getElementById('button-3')
const b4 = document.getElementById('button-4')
const b5 = document.getElementById('button-5')
const b6 = document.getElementById('button-6')
const b7 = document.getElementById('button-7')
const b8 = document.getElementById('button-8')
const b9 = document.getElementById('button-9')
const b0 = document.getElementById('button-0')
const b00 = document.getElementById('button-00')
const bPonto = document.getElementById('button-ponto')

//botoes para calculo ou resultado
const bOff = document.getElementById('button-OFF')
const bAc = document.getElementById('button-AC')
const bDelete = document.getElementById('button-delete')
const bDivisao = document.getElementById('button-Divisao')

const bMultiplicacao = document.getElementById('button-multiplicacao')
const bSubtracao = document.getElementById('button-subtracao')
const bAdicao = document.getElementById('button-adicao')
const bResultado = document.getElementById('button-resultado')

//eventos clique
bAc.addEventListener('click', AC);

bSubtracao.addEventListener('click', subtracao);
bAdicao.addEventListener('click', soma);
bMultiplicacao.addEventListener('click', multiplicacao)
bDivisao.addEventListener('click', divisao)
bResultado.addEventListener('click', resultado);
bDelete.addEventListener('click', del)


b1.addEventListener('click', function () {
    cliqueNumero(1);
});
b2.addEventListener('click', function () {
    cliqueNumero(2);
});
b3.addEventListener('click', function () {
    cliqueNumero(3);
});
b4.addEventListener('click', function () {
    cliqueNumero(4);
});
b5.addEventListener('click', function () {
    cliqueNumero(5);
});
b6.addEventListener('click', function () {
    cliqueNumero(6);
});
b7.addEventListener('click', function () {
    cliqueNumero(7);
});
b8.addEventListener('click', function () {
    cliqueNumero(8);
});
b9.addEventListener('click', function () {
    cliqueNumero(9);
});
b0.addEventListener('click', function () {
    cliqueNumero(0);
});
b00.addEventListener('click', function () {
    cliqueNumero('00');
});
bPonto.addEventListener('click', ponto);

//variaeis numericas
var num = false
var pont = false

//funçoes
function cliqueNumero(n) {
    num = false
    return telaBaixo.innerHTML += n;
};

function AC() {
    telaCima.innerHTML = ''
    telaBaixo.innerHTML = ''
    num = ''
    pont = false
};
function ponto() {
    if (pont == false) {
        telaBaixo.innerHTML += '.'
        pont = true
    }
};

function resultado() {
    if (telaCima.value.length > 0 || telaBaixo.value.length > 0) {
        telaCima.innerHTML += telaBaixo.value
        telaBaixo.innerHTML = eval(telaCima.value)
        telaCima.innerHTML = ''
        num = false
        pont = false
    } else {
        alert('adicione alguma operaçao a cauculadora')
    }

}

function subtracao() {
    if (num == false) {
        telaBaixo.innerHTML += '-'
        telaCima.innerHTML += telaBaixo.value
        telaBaixo.innerHTML = ''
        pont = false
        num = true
    }
}

function soma() {
    if (telaBaixo.value.length == 0) {
        telaBaixo.innerHTML = ''
    } else if (num == false) {
        telaBaixo.innerHTML += '+'
        telaCima.innerHTML += telaBaixo.value
        telaBaixo.innerHTML = ''
        num = true
        pont = false
    }
}
function multiplicacao() {
    if (telaBaixo.value.length == 0) {
        telaBaixo.innerHTML = ''
    } else if (num == false) {
        telaBaixo.innerHTML += '*'
        telaCima.innerHTML += telaBaixo.value
        telaBaixo.innerHTML = ''
        num = true
        pont = false
    }
}
function divisao() {
    if (telaBaixo.value.length == 0) {
        telaBaixo.innerHTML = ''
    } else if (num == false) {
        telaBaixo.innerHTML += '/'
        telaCima.innerHTML += telaBaixo.value
        telaBaixo.innerHTML = ''
        num = true
        pont = false
    }
}

function del() {
    let tb = telaBaixo.innerHTML;
    telaBaixo.innerHTML = tb.substring(0, tb.length - 1)
}

//menu hamburguer
var menu = document.getElementById('menu-hamburguer')
var line1 = document.getElementById('line1').style
var line2 = document.getElementById('line2').style
var line3 = document.getElementById('line3').style
var options = document.getElementById('menu-options').style
var menuState = false

menu.addEventListener('click', men)

function men() {
    if (menuState == false) {
        line1.transform = 'rotate(45deg)';
        line2.width = '3px'
        line3.transform = 'rotate(-45deg)';
        options.transform = 'translateX(9px)'
        menuState = true
    } else {
        line1.transform = 'translateY(15px)';
        line2.width = '50px'
        line3.transform = 'translateY(-15px)';
        options.transform = 'translateX(250px)'
        menuState = false
    }

}

//prancheta
var prend = document.getElementById('prend')
prend.addEventListener('click', trocaDeFolha)
var textarea = document.getElementById('note')

var prancheta = document.getElementById('prancheta')
var optPrancheta = document.getElementById('opt-prancheta')
optPrancheta.addEventListener('click', sttPrancheta)
var stt = false

function sttPrancheta() {

    if (stt == false) {
        stt = true
        prancheta.style.transform = 'translateX(0vw)'
        men()
    } else {
        prancheta.style.transform = 'translateX(150vw)'
        stt = false
    }

}

function trocaDeFolha() {
    prend.style.width = '110px'
    prend.style.height = '60px'
    prend.style.fontSize = '1.1em'
    setTimeout(function () {
        textarea.style.transform = 'translateX(150vw)'
    }, 1000)
    setTimeout(function () {
        textarea.innerHTML = ''
        textarea.style.transform = ''
    }, 2000)
    setTimeout(function () {
        prend.style.width = '100px'
        prend.style.height = '50px'
        prend.style.fontSize = '1em'
    }, 2500)

}

