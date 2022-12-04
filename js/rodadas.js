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
    },
    {
        time: 'cruzeiro',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0
    },
    {
        time: 'sporting cristal',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0
    },
    {
        time: 'bragantino',
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

function positionTimes(){
    let position = GrupoA.sort((a,b) => {
        if(a.p > b.p ){
            return 1
        }
        if(a.p == b.p ){
            if(a.sg > 0){
                if(a.sg > b.sg){
                    return 1
                }
            }
            if(a.sg < 0){
                if(a.sg > b.sg){
                    return 1
                }
            }
        }else{
            return -1
        }
    });

    tdTime[0].innerText = position[3].time;
    tdPontos[0].innerText = position[3].p;
    tdJogos[0].innerText = position[3].j
    tdVitorias[0].innerText = position[3].v
    tdEmpates[0].innerText = position[3].e
    tdDerrotas[0].innerText = position[3].d
    tdGolsPro[0].innerText = position[3].gp
    tdGolsContra[0].innerText = position[3].gc
    tdSaldoGols[0].innerText = position[3].sg

    tdTime[1].innerText = position[2].time;
    tdPontos[1].innerText = position[2].p;
    tdJogos[1].innerText = position[2].j
    tdVitorias[1].innerText = position[2].v
    tdEmpates[1].innerText = position[2].e
    tdDerrotas[1].innerText = position[2].d
    tdGolsPro[1].innerText = position[2].gp
    tdGolsContra[1].innerText = position[2].gc
    tdSaldoGols[1].innerText = position[2].sg

    tdTime[2].innerText = position[1].time;
    tdPontos[2].innerText = position[1].p;
    tdJogos[2].innerText = position[1].j
    tdVitorias[2].innerText = position[1].v
    tdEmpates[2].innerText = position[1].e
    tdDerrotas[2].innerText = position[1].d
    tdGolsPro[2].innerText = position[1].gp
    tdGolsContra[2].innerText = position[1].gc
    tdSaldoGols[2].innerText = position[1].sg

    tdTime[3].innerText = position[0].time;
    tdPontos[3].innerText = position[0].p;
    tdJogos[3].innerText = position[0].j
    tdVitorias[3].innerText = position[0].v
    tdEmpates[3].innerText = position[0].e
    tdDerrotas[3].innerText = position[0].d
    tdGolsPro[3].innerText = position[0].gp
    tdGolsContra[3].innerText = position[0].gc
    tdSaldoGols[3].innerText = position[0].sg
};
function insertResultsArray1(resultadoPro, resultadoContra, infoTime){
    let resultPro = resultadoPro;
    let resultContra = resultadoContra
    let indexTime = GrupoA.findIndex((element,index,array) => {
        return array[index].time == infoTime;
    })
    let informacoesTime = GrupoA[indexTime];
    let resultGolProContra;

    informacoesTime.j += 1;

    if(resultPro > resultContra){
        informacoesTime.p += 3;
        informacoesTime.v += 1;
    }else if(resultPro == resultContra){
        informacoesTime.p += 1;
        informacoesTime.e += 1;
    }else{
        informacoesTime.p += 0;
        informacoesTime.d += 1;
    }

    informacoesTime.gp += Number(resultPro);
    informacoesTime.gc += Number(resultContra);
    resultGolProContra = Number(resultPro) - Number(resultContra);
    informacoesTime.sg += resultGolProContra;
}

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

    for(let i = 0; i<4; i++){
        inputResultJogos[i].setAttribute('readonly', 'readonly');
    }

    insertResultsArray1(resultJogos[0], resultJogos[1], 'chivas');
    insertResultsArray1(resultJogos[1], resultJogos[0], 'bragantino');
    insertResultsArray1(resultJogos[2], resultJogos[3], 'sporting cristal');
    insertResultsArray1(resultJogos[3], resultJogos[2], 'cruzeiro');
    positionTimes()
});
btnSalvarResultJogos[1].addEventListener('click', function(){
    let resultJogos = [];
    resultJogos.push(inputResultJogos[4].value);
    resultJogos.push(inputResultJogos[5].value);
    resultJogos.push(inputResultJogos[6].value);
    resultJogos.push(inputResultJogos[7].value);

    for(let i = 0; i<resultJogos.length; i++){
        if(!resultJogos[i])return
    }

    for(let i = 4; i<8; i++){
        inputResultJogos[i].setAttribute('readonly', 'readonly');
    }

    insertResultsArray1(resultJogos[0], resultJogos[1], 'bragantino');
    insertResultsArray1(resultJogos[1], resultJogos[0], 'sporting cristal');
    insertResultsArray1(resultJogos[2], resultJogos[3], 'cruzeiro');
    insertResultsArray1(resultJogos[3], resultJogos[2], 'chivas');
    positionTimes()
});
btnSalvarResultJogos[2].addEventListener('click', function(){
    let resultJogos = [];
    resultJogos.push(inputResultJogos[8].value);
    resultJogos.push(inputResultJogos[9].value);
    resultJogos.push(inputResultJogos[10].value);
    resultJogos.push(inputResultJogos[11].value);

    for(let i = 0; i<resultJogos.length; i++){
        if(!resultJogos[i])return
    }

    for(let i = 8; i<12; i++){
        inputResultJogos[i].setAttribute('readonly', 'readonly');
    }

    insertResultsArray1(resultJogos[0], resultJogos[1], 'chivas');
    insertResultsArray1(resultJogos[1], resultJogos[0], 'sporting cristal');
    insertResultsArray1(resultJogos[2], resultJogos[3], 'cruzeiro');
    insertResultsArray1(resultJogos[3], resultJogos[2], 'bragantino');
    positionTimes()
});
btnSalvarResultJogos[3].addEventListener('click', function(){
    let resultJogos = [];
    resultJogos.push(inputResultJogos[12].value);
    resultJogos.push(inputResultJogos[13].value);
    resultJogos.push(inputResultJogos[14].value);
    resultJogos.push(inputResultJogos[15].value);

    for(let i = 0; i<resultJogos.length; i++){
        if(!resultJogos[i])return
    }

    for(let i = 12; i<16; i++){
        inputResultJogos[i].setAttribute('readonly', 'readonly');
    }

    insertResultsArray1(resultJogos[0], resultJogos[1], 'sporting cristal');
    insertResultsArray1(resultJogos[1], resultJogos[0], 'chivas');
    insertResultsArray1(resultJogos[2], resultJogos[3], 'bragantino');
    insertResultsArray1(resultJogos[3], resultJogos[2], 'cruzeiro');
    positionTimes()
});
btnSalvarResultJogos[4].addEventListener('click', function(){
    let resultJogos = [];
    resultJogos.push(inputResultJogos[16].value);
    resultJogos.push(inputResultJogos[17].value);
    resultJogos.push(inputResultJogos[18].value);
    resultJogos.push(inputResultJogos[19].value);

    for(let i = 0; i<resultJogos.length; i++){
        if(!resultJogos[i])return
    }

    for(let i = 16; i<20; i++){
        inputResultJogos[i].setAttribute('readonly', 'readonly');
    }

    insertResultsArray1(resultJogos[0], resultJogos[1], 'sporting cristal');
    insertResultsArray1(resultJogos[1], resultJogos[0], 'bragantino');
    insertResultsArray1(resultJogos[2], resultJogos[3], 'chivas');
    insertResultsArray1(resultJogos[3], resultJogos[2], 'cruzeiro');
    positionTimes()
});
btnSalvarResultJogos[5].addEventListener('click', function(){
    let resultJogos = [];
    resultJogos.push(inputResultJogos[20].value);
    resultJogos.push(inputResultJogos[21].value);
    resultJogos.push(inputResultJogos[22].value);
    resultJogos.push(inputResultJogos[23].value);

    for(let i = 0; i<resultJogos.length; i++){
        if(!resultJogos[i])return
    }

    for(let i = 20; i<24; i++){
        inputResultJogos[i].setAttribute('readonly', 'readonly');
    }

    insertResultsArray1(resultJogos[0], resultJogos[1], 'cruzeiro');
    insertResultsArray1(resultJogos[1], resultJogos[0], 'sporting cristal');
    insertResultsArray1(resultJogos[2], resultJogos[3], 'bragantino');
    insertResultsArray1(resultJogos[3], resultJogos[2], 'chivas');
    positionTimes()
});