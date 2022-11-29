const divJogos = document.querySelectorAll('.jogos');
const btnVoltarRodada = document.querySelectorAll('.voltar-rodada');
const btnAvancarRodada = document.querySelectorAll('.avancar-rodada');
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