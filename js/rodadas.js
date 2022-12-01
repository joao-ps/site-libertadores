let GrupoA = [
    {
        time: 'chivas',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0
    }
]

const divJogos = document.querySelectorAll('.jogos');
const btnVoltarRodada = document.querySelectorAll('.voltar-rodada');
const btnAvancarRodada = document.querySelectorAll('.avancar-rodada');
const btnSalvarResultJogos = document.querySelectorAll('.btn-result-jogos');
const inputResultJogos = document.querySelectorAll('.input-time-resultado');
const tdTime = document.querySelectorAll('.cedula-time');
const tdPontos = document.querySelectorAll('.cedula-pontos');
const tdJogos = document.querySelectorAll('.cedula-jogos');
const tdVitorias = document.querySelectorAll('.cedula-vitorias');
const tdEmpates = document.querySelectorAll('.cedula-empates');
const tdDerrotas = document.querySelectorAll('.cedula-derrotas');
const tdGolsPro = document.querySelectorAll('.cedula-gols-pro');
const tdGolsContra = document.querySelectorAll('.cedula-gols-contra');
const tdSaldoGols  = document.querySelectorAll('.cedula-saldo-gols');
let valorTranslateRodada1 = 0;
let valorTranslateRodada2 = 0;
let valorTranslateRodada3 = 0;
let valorTranslateRodada4 = 0;
let valorTranslateRodada5 = 0;
let valorTranslateRodada6 = 0;
let valorTranslateRodada7 = 0;
let valorTranslateRodada8 = 0;

btnVoltarRodada[0].addEventListener('click', function(){
    valorTranslateRodada1 += 530;
    divJogos[0].style.transform = `TranslateX(${valorTranslateRodada1}px)`;
});
btnAvancarRodada[0].addEventListener('click', function(){
    valorTranslateRodada1 += -530;
    divJogos[0].style.transform = `TranslateX(${valorTranslateRodada1}px)`;

});

btnVoltarRodada[1].addEventListener('click', function(){
    valorTranslateRodada2 += 530;
    divJogos[1].style.transform = `TranslateX(${valorTranslateRodada2}px)`;
});
btnAvancarRodada[1].addEventListener('click', function(){
    valorTranslateRodada2 += -530;
    divJogos[1].style.transform = `TranslateX(${valorTranslateRodada2}px)`;

});

btnVoltarRodada[2].addEventListener('click', function(){
    valorTranslateRodada3 += 530;
    divJogos[2].style.transform = `TranslateX(${valorTranslateRodada3}px)`;
});
btnAvancarRodada[2].addEventListener('click', function(){
    valorTranslateRodada3 += -530;
    divJogos[2].style.transform = `TranslateX(${valorTranslateRodada3}px)`;

});

btnVoltarRodada[3].addEventListener('click', function(){
    valorTranslateRodada4 += 530;
    divJogos[3].style.transform = `TranslateX(${valorTranslateRodada4}px)`;
});
btnAvancarRodada[3].addEventListener('click', function(){
    valorTranslateRodada4 += -530;
    divJogos[3].style.transform = `TranslateX(${valorTranslateRodada4}px)`;

});

btnVoltarRodada[4].addEventListener('click', function(){
    valorTranslateRodada5 += 530;
    divJogos[4].style.transform = `TranslateX(${valorTranslateRodada5}px)`;
});
btnAvancarRodada[4].addEventListener('click', function(){
    valorTranslateRodada5 += -530;
    divJogos[4].style.transform = `TranslateX(${valorTranslateRodada5}px)`;

});

btnVoltarRodada[5].addEventListener('click', function(){
    valorTranslateRodada6 += 530;
    divJogos[5].style.transform = `TranslateX(${valorTranslateRodada6}px)`;
});
btnAvancarRodada[5].addEventListener('click', function(){
    valorTranslateRodada6 += -530;
    divJogos[5].style.transform = `TranslateX(${valorTranslateRodada6}px)`;

});

btnVoltarRodada[6].addEventListener('click', function(){
    valorTranslateRodada7 += 530;
    divJogos[6].style.transform = `TranslateX(${valorTranslateRodada7}px)`;
});
btnAvancarRodada[6].addEventListener('click', function(){
    valorTranslateRodada7 += -530;
    divJogos[6].style.transform = `TranslateX(${valorTranslateRodada7}px)`;

});

btnVoltarRodada[7].addEventListener('click', function(){
    valorTranslateRodada8 += 530;
    divJogos[7].style.transform = `TranslateX(${valorTranslateRodada8}px)`;
});
btnAvancarRodada[7].addEventListener('click', function(){
    valorTranslateRodada8 += -530;
    divJogos[7].style.transform = `TranslateX(${valorTranslateRodada8}px)`;

});

btnSalvarResultJogos[0].addEventListener('click', function(){
    let resultJogos = [];
    resultJogos.push(inputResultJogos[0].value);
    resultJogos.push(inputResultJogos[1].value);
    resultJogos.push(inputResultJogos[2].value);
    resultJogos.push(inputResultJogos[3].value);

    for(let i = 0; i<resultJogos.length; i++){
        if(!resultJogos[i])return
    }

    console.log(resultJogos[0] + ' X ' + resultJogos[1]);
    //console.log(resultJogos[2] + ' X ' + resultJogos[3]);

    inputResultJogos.forEach(element => {
        element.setAttribute('readonly', 'readonly');
    })

    GrupoA[0].j += 1;

    if(resultJogos[0] > resultJogos[1]){
        GrupoA[0].p += 3;
        GrupoA[0].v += 1;
    }else if(resultJogos[0] == resultJogos[1]){
        GrupoA[0].pt += 1;
        GrupoA[0].e += 1;
    }else{
        GrupoA[0].pt += 0;
        GrupoA[0].d += 1;
    }

    console.log('result1 ' + resultJogos[0])
    GrupoA[0].gp = resultJogos[0];
    GrupoA[0].gc = resultJogos[1];
    GrupoA[0].sg += GrupoA[0].gp - GrupoA[0].gc;
   
    tdPontos[0].innerText = GrupoA[0].p;
    tdJogos[0].innerText = GrupoA[0].j
    tdVitorias[0].innerText = GrupoA[0].v
    tdEmpates[0].innerText = GrupoA[0].e
    tdDerrotas[0].innerText = GrupoA[0].d
    tdGolsPro[0].innerText = GrupoA[0].gp
    tdGolsContra[0].innerText = GrupoA[0].gc
    tdSaldoGols[0].innerText = GrupoA[0].sg
});