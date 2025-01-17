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
const bRaiz = document.getElementById('button-raiz')
const bDivisao = document.getElementById('button-Divisao')

const bMultiplicacao = document.getElementById('button-multiplicacao')
const bSubtracao = document.getElementById('button-subtracao')
const bAdicao = document.getElementById('button-adicao')
const bResultado = document.getElementById('button-resultado')

//eventos clique
bAc.addEventListener('click', AC);

bSubtracao.addEventListener('click', function () {
    subtracao(Number(telaBaixo.value));
});
bAdicao.addEventListener('click', function () {
    soma(Number(telaBaixo.value));
});
bResultado.addEventListener('click', resultado)

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
var check = true
var res = false
var num = 0
var ultimaConta = ''

//funçoes
function cliqueNumero(n) {
    if (telaBaixo.value == '00') {
        telaBaixo.innerHTML = ''
    }
    if (res == true) {
        telaBaixo.innerHTML = ''
        num = 0
        res = false
        ultimaConta = ''
    }
    return telaBaixo.innerHTML += n;
};

function AC() {
    telaCima.innerHTML = '0'
    telaBaixo.innerHTML = '00'
    check = true
    num = 0
};

function soma(n) {
    if (num <= 0) {
        num += n;
    } else {
        num -= n;
    }

    check = false
    ultimaConta = 'soma'
    return telaCima.innerHTML = telaBaixo.value, telaBaixo.innerHTML = '';
};
function subtracao(n) {
    if (check == true) {
        num += n;
        check = false
    } else {
        num -= n;
    }
    ultimaConta = 'subtracao'
    if (telaBaixo.value == '00') {
        return telaBaixo.innerHTML = '-'
    } else {
        return telaCima.innerHTML = telaBaixo.value, telaBaixo.innerHTML = '';
    }
};

function ponto() {
    telaBaixo.innerHTML += '.'
};

function resultado() {
    switch (ultimaConta) {
        case 'soma':
            soma(Number(telaBaixo.value))
            break;
        case 'subtracao':
            subtracao(Number(telaBaixo.value))
            break;

        default:
            break;
    }

    telaCima.innerHTML = ''
    telaBaixo.innerHTML = num
    check = true
    num = 0
}